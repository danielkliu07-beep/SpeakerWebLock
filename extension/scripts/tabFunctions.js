async function getCurrentTab() {
    let queryOptions = {active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions); //Either tabs.Tab or 'undefined' 
    return tab;
}

export { getCurrentTab }