import CONFIG from "../data/config";

export async function privateFetch(path, method, data) {
  const canContainBody = method === "POST";
  let url = CONFIG.BASE_URL + path;

  if (!canContainBody) {
    url = new URL(url);
    Object.entries(params).forEach(([key, value]) =>
      path.searchParams.append(key, params[key])
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
