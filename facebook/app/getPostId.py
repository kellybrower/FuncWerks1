import requests

# Replace with your actual access token
access_token = '695503689341265|H1qKJCaoyrhiT7HBDOKXoigzK2k'

api_url = f'https://graph.instagram.com/me/media?fields=id,caption&access_token={access_token}'

response = requests.get(api_url)

if response.status_code == 200:
    posts = response.json().get('data', [])
    for post in posts:
        print('Post ID:', post['id'])
        print('Caption:', post.get('caption', 'No Caption'))
        print('---')
else:
    print('Failed to fetch posts:', response.status_code, response.text)

