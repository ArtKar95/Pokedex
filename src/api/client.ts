export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const;

type ApiMethod = (typeof API_METHODS)[keyof typeof API_METHODS];

type ApiRequestOptions = {
  method?: ApiMethod;
  body?: unknown;
  headers?: HeadersInit;
};

export type ApiRequestError = {
  status: number;
  data: unknown;
};

const apiRequest = async <T>(
  url: string,
  options: ApiRequestOptions = {},
): Promise<T> => {
  const { method = API_METHODS.GET, body, headers } = options;
  const response = await fetch(url, {
    method,
    headers: {
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      status: response.status,
      data,
    } satisfies ApiRequestError;
  }

  return data as T;
};

export default apiRequest;
