chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'convert') {
    convertToMm(message.selectionText);
  }
});

function convertToMm(selectedText) {
  const numValue = parseFloat(selectedText);
  if (isNaN(numValue)) return;
  const mmValue = (numValue * 25.4).toFixed(2);
  const newText = `${mmValue} mm`;

  document.getSelection().anchorNode.nodeValue = 
    document.getSelection().anchorNode.nodeValue.replace(selectedText, newText);
}
