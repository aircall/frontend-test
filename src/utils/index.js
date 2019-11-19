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

export function getIconName(direction, type) {
  if (direction === "outbound") {
    return "phone-outgoing";
  }

  switch (type) {
    case "answered": {
      return "phone-incoming";
    }
    case "missed": {
      return "phone-missed";
    }
    case "voicemail": {
      return "voicemail";
    }
    default: {
      return;
    }
  }
}

export function transposeFeedDataIntoGroups(data) {
  return Object.entries(
    data.reduce((accumulator, call) => {
      const { created_at } = call;
      const parsedCreatedAt = parseDate(created_at);

      call.callTime = parseTime(created_at);

      if (accumulator[parsedCreatedAt]) {
        accumulator[parsedCreatedAt].push(call);
      } else {
        accumulator[parsedCreatedAt] = [call];
      }

      return accumulator;
    }, {})
  );
}

export function parseDate(dateString) {
  return new Date(dateString)
    .toUTCString()
    .split(/\s/, 4)
    .join(" ");
}

export function parseTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const meridian = hours < 12 ? "am" : "pm";
  const tHours = hours > 12 ? hours - 12 : hours;

  return `${tHours < 10 ? `0${tHours}` : tHours}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${meridian.toUpperCase()}`;
}
