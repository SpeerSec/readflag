// file_viewer.js

// Function to load and display the contents of a file when the window loads
window.onload = function() {
    // Function to load and display the contents of a file
    function displayFileContents(filePath) {
        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();
        
        // Set up a callback function to handle the response
        xhr.onreadystatechange = function() {
            // Check if the request is complete and successful
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // Display the file contents in an alert dialog
                alert("File Contents:\n" + xhr.responseText);
            }
        };
        
        // Open a GET request to the specified file path
        xhr.open("GET", filePath, true);
        
        // Send the request
        xhr.send();
    }

    // Example usage: display the contents of "/flag"
    displayFileContents("/flag");
};

