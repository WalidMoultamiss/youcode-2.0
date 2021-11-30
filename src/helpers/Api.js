const db = "http://localhost:5000"

export const get = async (url, token) => {
    url = db + url
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    return await response.json()
};

export const post = async (url, body, token) => {
    url = db + url
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });
    return await response.json()
};

export const put = async (url, body, token) => {
    url = db + url
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });
    return await response.json()
}

