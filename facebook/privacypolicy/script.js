// This script will load the privacy policy text into the webpage
document.addEventListener('DOMContentLoaded', function() {
    fetch('privacy_policy.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('policy-content').innerText = data;
        })
        .catch(error => console.error('Error loading privacy policy:', error));
});

