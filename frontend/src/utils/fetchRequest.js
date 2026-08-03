async function getRequest(api_url) {

    const response = await fetch(api_url, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error(`Api returned ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return await response.json();

}

async function postRequest(api_url, query) {

    const response = await fetch(api_url, {
        method: "POST",
        body: JSON.stringify(query),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Api returned ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return await response.json();
    
}

async function deleteRequest(api_url) {

    const response = await fetch(api_url, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(`Api returned ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return await response.json();
    
}

export { getRequest, postRequest, deleteRequest }

