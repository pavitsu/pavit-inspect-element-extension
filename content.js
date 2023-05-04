console.log("injecting content.js");

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.enableInspection) {
      // // Save it using the Chrome extension storage API.
      // chrome.storage.local.set({'foo': 'hello', 'bar': 'hi'}, function() {
      //   console.log('Settings saved');
      // });
  
      // Attach event listener to inspect elements on hover
      document.addEventListener("mouseover", function (event) {
        event.target.style.outline = "2px solid red";
        event.target.addEventListener("click", inspectElement);
        event.stopPropagation();
        event.preventDefault();
      });
      document.addEventListener("mouseout", function (event) {
        event.target.style.outline = null;
        event.target.removeEventListener("click", inspectElement);
        event.stopPropagation();
        event.preventDefault();
      });
    }
  });

  

  function inspectElement(e) {
    e.stopPropagation();
    e.preventDefault();

    console.log("Inspecting element:", e.target);

    // Save it using the Chrome extension storage API.
    // chrome.storage.local.set({'tag': e.target.tagName}, function() {
    //   console.log('Inspect Settings saved');
    // });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log("Recv. Send response = " + document.title);
      data = {
        'title': document.title ,
        'tag':e.target.tagName,
        'idName':e.target.id,
        'class':e.target.className,
        'href':e.target.href,
        'text':e.target.innerText,
      }
      console.log(data);
      sendResponse(data);
      return true;
    });

    // // Read it using the storage API
    // chrome.storage.local.get(['zoo', 'loo'], function(items) {
    //   message('Inspect Settings retrieved', items);
    // });
  }
  
  // // Function to inspect the element
  // function inspectElement(element) {
  //   console.log("Inspecting element:", element);
  //   // Do whatever you want with the inspected element
  // }
  