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

  interface GMBPostPayload {
    languageCode: string;
    summary: string;
    topicType: string;
    media?: {
      mediaFormat: string;
      sourceUrl: string;
    }[];
  }

  const postData: GMBPostPayload = {
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

export async function getGMBReviews(refreshToken: string, locationId: string) {
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  try {
    const url = `https://mybusiness.googleapis.com/v4/${locationId}/reviews`;
    const response = await oauth2Client.request({
      url,
      method: 'GET',
    });
    
    return response.data;
  } catch (error) {
    console.error('GMB Reviews Fetch Error:', error);
    throw error;
  }
}

export async function replyToGMBReview(
  refreshToken: string, 
  locationId: string, 
  reviewId: string, 
  comment: string
) {
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  try {
    const url = `https://mybusiness.googleapis.com/v4/${locationId}/reviews/${reviewId}/reply`;
    const response = await oauth2Client.request({
      url,
      method: 'PUT',
      data: { comment },
    });
    
    return response.data;
  } catch (error) {
    console.error('GMB Review Reply Error:', error);
    throw error;
  }
}
