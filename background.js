// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(() => {
//   // Send a message to the active tab
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function(tabs) {
//     let tab = tabs[0];
//     let url = tab.url;
//
//     chrome.storage.local.set({'address': url})
//   });
// });
