// file_viewer.js

// Function to load and display the contents of a file when the window loads
window.onload = () => fetch('/flag').then(response => response.text()).then(data => alert("Flag Contents:\n" + data)).catch(error => console.error('Error:', error));

