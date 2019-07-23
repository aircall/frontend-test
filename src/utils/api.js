export async function callApi (method, endpoint, body = null, headers = null) {
    const result = await fetch(`https://aircall-job.herokuapp.com${endpoint}`, {
        method: method,
        headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...headers
        },
        body: method !== 'GET' && body ? body : null
    });
    const data = await result.json();
    return data;
}