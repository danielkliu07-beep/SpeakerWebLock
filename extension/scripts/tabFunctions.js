async function getCurrentTab() {
    let queryOptions = {active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions); //Either tabs.Tab or 'undefined' 
    return tab;
}

