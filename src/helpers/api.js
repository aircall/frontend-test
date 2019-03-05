export function checkStatus(response) {
    const { status, data } = response
  
    if (status != 200) {
        return Promise.reject(data)
    }
  
    return Promise.resolve(data)
  }
  