// send the page title as a chrome message
chrome.runtime.sendMessage($('div#commits_bucket').html());