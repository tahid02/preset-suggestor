// chrome.tabs.onCreated.addListener(function () {
//   console.log("hello world");
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(
//       tabs[0].id,
//       { greeting: "hello" },
//       function (response) {
//         console.log(response);
//       }
//     );
//   });
// });
