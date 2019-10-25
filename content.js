$(document).ready(function(){

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  $('.container').addClass('jquery');

  $('#pin-link').click(() => {
    chrome.tabs.query(queryInfo, function(tabs) {
      // chrome.tabs.query invokes the callback with a list of tabs that match the
      // query. When the popup is opened, there is certainly a window and at least
      // one tab, so we can safely assume that |tabs| is a non-empty array.
      // A window can only have one active tab at a time, so the array consists of
      // exactly one tab.
      var tab = tabs[0];

      // A tab is a plain object that provides information about the tab.
      // See https://developer.chrome.com/extensions/tabs#type-Tab
      var url = tab.url;
      var title = tab.title;

      $.post( "http://localhost:3030/messages", { url: url, title: title })
      .done(() => {
        alert(`${url} Pinned!`)
      });
    });

  });
});
