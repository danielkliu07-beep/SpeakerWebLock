export async function getRequest(api_url) {

    const response = await fetch(api_url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Api returned ${response.status}`);
    }

    return await response.json();

}

export async function postRequest(api_url, query) {

    const response = await fetch(api_url, {
        method: "GET",
        body: JSON.stringify(query),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Api returned ${response.status}`);
    }

    return await response.json();
    
}

export async function deleteRequest(api_url) {

    const response = await fetch(api_url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Api returned ${response.status}`);
    }

    return await response.json();
    
}

