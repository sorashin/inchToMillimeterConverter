chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'convertToMm',
      title: 'mmに変換',
      contexts: ['selection']
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'convertToMm') {
      // コンテンツスクリプトにメッセージを送信
      chrome.tabs.sendMessage(tab.id, { action: "convert", selectionText: info.selectionText });
    }
  });
  