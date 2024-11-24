// In your background script or popup page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == 'chooseFolder') {
      chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(entry) {
        if (entry) {
          // Get the full path of the selected folder
          entry.getDisplayPath(function(path) {
          // Send the selected folder path back to the content script
            sendResponse({path: path});
          });
        } else {
          sendResponse({});
        }
      });
      return true;  // Return true to indicate that we will send a response asynchronously
    }
  });

  

  function getFolderPathFromUser(callback) {
    console.log("hello");
    chrome.runtime.getPackageDirectoryEntry(function(root) {
      // Get a reference to the "images" folder within the extension's directory
      root.getDirectory('images', {}, function(imagesFolder) {
        // Get a list of all the files in the "images" folder
        var reader = imagesFolder.createReader();
        reader.readEntries(function(entries) {
          // Iterate through each file in the "images" folder
          entries.forEach(function(entry) {
            // Check if the file is an image file (e.g. JPG, PNG, GIF)
            if (entry.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
              // Get a URL to the image file
              var imageUrl = entry.toURL();
              
              // Create an image element and set its "src" attribute to the URL
              var image = document.createElement('img');
              image.src = imageUrl;
              
              // Add the image element to the page
              document.body.appendChild(image);
            }
          });
        });
      });
    });
  
  }
  getImg.addEventListener('click',getFolderPathFromUser())