chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.update(tab.id, { url: `https://outline.com/${tab.url}` });
});