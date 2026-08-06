import { getCurrentTab } from "../scripts/tabFunctions";

const tab = getCurrentTab()
const verificationPageUrl = chrome.runtime.getURL("verificationPage.html")


if (tab != undefined) {

    const tabId = tab.id;


    chrome.tabs.create({
        url: verificationPageUrl,
        active: true
    });

    chrome.tabs.remove(tabId)

    chrome.runtime.onMessage.addListener((message) => {
        if (message.type === "verificationResult" && message.verified === true) {
            const removedTab = getCurrentTab()

            chrome.tabs.create({
                url: verificationPageUrl,
                active: true
            });
            chrome.tabs.remove(removedTab.id)
        }
    });


}
