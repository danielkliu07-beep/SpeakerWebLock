import { getRequest, postRequest, deleteRequest } from "./scripts/fetchRequest";

const websiteList = [];
const API_URL = 'http://localhost:3000/api/url'

async function loadWebsite() {
    try {
        const data = await getRequest(API_URL)
        websiteList.value = Array.isArray(data) ? data.map(url => ({ url, verified: 0 })) : [];
    } catch (err) {
        console.error(err)
    }
}

export { websiteList, loadWebsite };