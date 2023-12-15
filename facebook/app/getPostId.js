const accessToken = '695503689341265|H1qKJCaoyrhiT7HBDOKXoigzK2k'; // Replace with your actual access token

fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=${accessToken}`)
  .then(response => {
    if (!response.ok) {
      return response.json().then(err => {
        throw new Error(`HTTP error! Status: ${response.status}. Error: ${JSON.stringify(err)}`);
      });
    }
    return response.json();
  })
  .then(data => {
    console.log('Post Data:', data);
    // Process and display the data
  })
  .catch(error => {
    console.error('Error fetching Instagram media:', error);
  });

