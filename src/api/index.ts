import * as t from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";

const API_ENDPOINT = "aircall-job.herokuapp.com";

interface ValidResponse<T> {
  error: false;
  payload: T;
}

interface ErrorResponse {
  error: true;
  message: string;
}

type Response<T> = ErrorResponse | ValidResponse<T>;

type ApiCallSignature<T> = {
  path: string;
  validator?: t.Type<T>;
  method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE";
  params?: { [k: string]: unknown };
};

export async function apiCall<T = undefined>({
  method = "GET",
  path,
  validator,
  params = {}
}: ApiCallSignature<T>): Promise<Response<T>> {
  // build request
  let request;
  const url = new URL(`${window.location.protocol}//${API_ENDPOINT}${path}`);
  const headers = {
    "Content-type": "application/json; charset=UTF-8"
  };
  if (method === "GET" || method === "HEAD") {
    Object.keys(params).forEach(key => {
      const value = params[key];
      if (typeof value !== "string")
        throw new Error(
          `Params must have string values with GET/HEAD requests. Invalid key '${key}' with value type '${typeof value}'`
        );
      url.searchParams.append(key, value);
    });
    request = new Request(url.href, { method, headers });
  } else {
    request = new Request(url.href, {
      method,
      headers,
      body: JSON.stringify(params)
    });
  }

  // get response
  let response;
  try {
    response = await fetch(request);
  } catch (error) {
    return {
      error: true,
      message:
        "Communication avec le serveur impossible. Vérifiez votre connection et réessayez."
    };
  }

  if (response.status < 200 || response.status >= 400)
    return {
      error: true,
      message: "Une erreur est survenue. Merci de réessayer plus tard."
    };

  if (!validator) return { error: false, payload: (undefined as any) as T };

  // get json
  let result;
  try {
    result = await response.json();
  } catch (error) {
    console.log("faulty JSON", { error, response });
    return {
      error: true,
      message: "Une erreur est survenue. Merci de réessayer plus tard."
    };
  }

  // validate response
  const validatedResult = validator.decode(result);
  if (validatedResult.isLeft()) {
    // no good
    console.log("received json does not match signature", {
      result,
      error: PathReporter.report(validatedResult)
    });
    return {
      error: true,
      message: "Une erreur est survenue. Merci de réessayer plus tard"
    };
  }

  return { error: false, payload: validatedResult.value };
}
