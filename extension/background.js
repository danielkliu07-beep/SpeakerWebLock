import { websiteList, loadWebsite } from "./websiteList";

await loadWebsite()

chrome.tabs.onActivated.addListener(async (tab) => {
    for (let i = 0; i < websiteList.length; i++) {
        if (tab.url.startsWith(websiteList[i]) && websiteList[i].verified === 0 ) {
            chome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['./verification/verification.js']
            });
        }
    }
    


});