export async function sendAudio(api_url, query) {

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

    return await response.json();

    
}
