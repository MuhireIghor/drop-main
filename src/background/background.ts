chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg);
    console.log(sender);
    sendResponse("Front the background Script");
})
chrome.browserAction.onClicked.addListener(function () {
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        width: 1200,
        height: 1000
    });
});
export { }