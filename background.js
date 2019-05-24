chrome.browserAction.onClicked.addListener((tab) => {
    chrome.storage.sync.get(['newTab'], (result) => {
        if (result.newTab) {
            chrome.tabs.create({
                url: `https://outline.com/${tab.url}`,
                openerTabId: tab.id
            });
        }
        else
            chrome.tabs.update(tab.id, { url: `https://outline.com/${tab.url}` });
    });
});