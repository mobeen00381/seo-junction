import { createClient } from '@/lib/supabase/server';
import { getGoogleTokens } from '@/lib/google/auth';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL('/dashboard?error=' + encodeURIComponent(error), request.url));
  }

  if (!code) {
    return NextResponse.redirect(new URL('/dashboard?error=No+code+received', request.url));
  }

  try {
    const tokens = await getGoogleTokens(code);
    
    // Create OAuth client to fetch account info
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
    oauth2Client.setCredentials(tokens);

    interface GMBAccountsResponse {
      data: {
        accounts?: {
          name: string;
        }[];
      };
    }

    // Use direct HTTP request since googleapis doesn't bundle a mybusiness client correctly in all environments
    const accountsResponse = await oauth2Client.request({
      url: 'https://mybusinessaccountmanagement.googleapis.com/v1/accounts',
      method: 'GET'
    }) as GMBAccountsResponse;
    
    const accountName = accountsResponse.data.accounts?.[0]?.name; // Use primary account

    const supabase = await createClient();
    
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Save refresh token and account info
    const { error: dbError } = await supabase
      .from('profiles')
      .update({
        google_refresh_token: tokens.refresh_token,
        gmb_account_id: accountName,
        gmb_connected: true
      })
      .eq('id', user.id);

    if (dbError) {
      console.error('Database Error:', dbError);
      return NextResponse.redirect(new URL('/dashboard?error=Database+save+failed', request.url));
    }

    return NextResponse.redirect(new URL('/dashboard?gmb_success=true', request.url));
  } catch (err) {
    console.error('Google Auth Error:', err);
    return NextResponse.redirect(new URL('/dashboard?error=OAuth+failed', request.url));
  }
}
