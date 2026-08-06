import { websiteList } from "./websiteList";

chrome.action.onCreated.addListener(async (tab) => {
    for (let i = 0; i < websiteList.length; i++) {
        if (tab.url.startsWith(websiteList[i])) {
            chome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['./scripts/verification.js']
            });
        }
    }
    


});