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
    // Use direct HTTP request since googleapis doesn't bundle a mybusiness client
    const url = `https://mybusiness.googleapis.com/v4/${locationId}/localPosts`;
    const response = await oauth2Client.request({
      url,
      method: 'POST',
      data: postData,
    });
    
    return response.data;
  } catch (error) {
    console.error('GMB Post Error:', error);
    throw error;
  }
}
