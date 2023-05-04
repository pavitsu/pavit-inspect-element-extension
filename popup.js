// Send a message to the content script to enable element inspection
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { enableInspection: true });
  });
  
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  console.log("Send");
  chrome.tabs.sendMessage(tabs[0].id, "message", (response) => {
    console.log("Recv response = " + response);
    // document.getElementById("title").innerText = "title: " +response.title;
    var idName = (response.idName === undefined) ? "" : response.idName;
    var class_name = (response.class === undefined) ? "" :response.class;
    var href = (response.href === undefined) ? "" :response.href;
    var text = (response.text === undefined) ? "" :response.text;
    document.getElementById("tag").innerHTML ="tag: "+response.tag.toLowerCase();
    document.getElementById("id").innerHTML ="id: "+idName ;
    document.getElementById("class").innerHTML ="class: "+class_name;
    document.getElementById("href").innerHTML ="href: "+href;
    document.getElementById("text").innerHTML ="text: "+text;
  });
});

// document.getElementById('load').onclick = () => {
//   chrome.storage.local.get(null, function(results) {
//     console.log('storage qty = ' + Object.keys(results).length);
//     let no = 1;
//     for (let key in results) {
//       console.log(no++ + ' key=' + key + ' value=' + results[key]);
//     }
//   });
// }

// document.getElementById('load').onclick = () => {myFunction();}

// function myFunction() {
//   document.getElementById("output").innerHTML = "Hello World";
// }