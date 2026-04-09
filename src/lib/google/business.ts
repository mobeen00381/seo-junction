import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export async function createGMBPost(
  refreshToken: string, 
  locationId: string, 
  content: string, 
  mediaUrl?: string
) {
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  // GBP API for posting often uses the v4 endpoint directly or via discovery
  const gmb = google.mybusiness('v4');
  
  const postData: any = {
    languageCode: 'en-US',
    summary: content,
    topicType: 'STANDARD',
  };

  if (mediaUrl) {
    postData.media = [
      {
        mediaFormat: 'PHOTO',
        sourceUrl: mediaUrl,
      }
    ];
  }

  try {
    const response = await gmb.accounts.locations.localPosts.create({
      parent: locationId, // Format: accounts/{account_id}/locations/{location_id}
      auth: oauth2Client,
      requestBody: postData
    });
    
    return response.data;
  } catch (error) {
    console.error('GMB Post Error:', error);
    throw error;
  }
}
