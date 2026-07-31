async function sendAudio(api_url, query) {

    try {
        const response = await fetch(api_url, {
            method: "POST",
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await response.json()


    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to access api",
            error_message: err.message,
        })
    }
}
