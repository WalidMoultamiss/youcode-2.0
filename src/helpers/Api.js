export const get = async (url, token) => {
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

