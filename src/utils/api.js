async function callApi (method, endpoint, data = null, headers = null) {
    const result = await fetch(`https://aircall-job.herokuapp.com${endpoint}`, {
        method: method,
        headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...headers
        },
        body: method !== 'GET' && data ? data : null
    });
}