// Replace with your actual access token and Instagram post ID
const accessToken = '695503689341265|H1qKJCaoyrhiT7HBDOKXoigzK2k';
const postId = 'INSTAGRAM_POST_ID';

const apiUrl = `https://graph.instagram.com/${postId}?fields=id,media_type,media_url,caption,permalink&access_token=${accessToken}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Post Data:', data);
    // Process and display the data
  })
  .catch(error => {
    console.error('Fetching Instagram Post failed:', error);
  });

