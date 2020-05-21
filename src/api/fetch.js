const APIBasePath = 'https://aircall-job.herokuapp.com';

export function fetchAPI(method, uri, body = null) {
    const url = `${APIBasePath}/${uri}`;

    return fetch(url, {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
    });
}

export async function getAllCalls() {
    const response = await fetchAPI('GET', 'activities');
    return response.json();
}

export async function updateIsArchivedForCall(callId, isArchived) {
    const response = await fetchAPI('POST', `activities/${callId}`, {
        is_archived: isArchived,
    });
    return response.json();
}

export async function resetApplicationData() {
    const response = await fetchAPI('GET', 'reset');
    return response.json();
}