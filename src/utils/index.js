import CONFIG from "../data/config";

export async function privateFetch(path, method, data) {
  const canContainBody = method === "POST";
  let url = new URL(CONFIG.BASE_URL + path);

  if (!canContainBody && data) {
    Object.entries(data).forEach(([key, value]) =>
      url.searchParams.append(key, value)
    );
  }

  const response = await fetch(url, {
    method,
    ...(canContainBody
      ? {
          body: JSON.stringify(data)
        }
      : null)
  });

  return await response.json();
}

export function dispatchHandler(dispatch) {
  return function dispatcher(type, payload = null) {
    return dispatch({ type, payload });
  };
}
