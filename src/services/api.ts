import { BackendError } from "../helpers/BackendError";
import { deepCopy } from "../helpers/DeepCopy";
import { STORAGE_TOKEN_KEY } from "@/utils/constants";

const NETWORK_ERROR = new BackendError(
  {},
  { message: "generalModalErrorNetwork", type: "UNRECOVERABLE" }
);

const replacer = (key: string, value: any) => {
  if (typeof value === "string") {
    return value || null;
  }
  return value;
};

export default class Api {
  private baseUrl: string;
  private defaultOptions: RequestInit;
  private static instance: Api;

  constructor(options: { baseUrl: string; defaultOptions: RequestInit }) {
    this.baseUrl = options.baseUrl;
    this.defaultOptions = {
      credentials: "same-origin",
      ...options.defaultOptions,
    };
    this.defaultOptions.headers = {
      Authorization: "Bearer ",
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.defaultOptions.headers,
    };
  }

  static getInstance(options: {
    baseUrl: string;
    defaultOptions: RequestInit;
  }) {
    if (!this.instance) {
      this.instance = new Api(options);
    }
    return this.instance;
  }

  fetch(url: string, options: RequestInit) {
    return fetch(url, options)
      .catch(() => {
        throw NETWORK_ERROR;
      })
      .then(this.parseBody)
      .then(this.checkStatus.bind(this, url, options));
  }

  parseBody(response: Response) {
    const contentType = response.headers.get("Content-Type");
    let parsePromise;

    if (/json/.test(contentType as string)) {
      parsePromise = response.json();
    } else if (/multipart/.test(contentType as string)) {
      parsePromise = response.formData();
    } else if (/pdf|xml/.test(contentType as string)) {
      parsePromise = response.blob();
    } else {
      parsePromise = response.text();
    }

    return parsePromise.then((parsedBody) => ({ response, parsedBody }));
  }

  checkStatus(
    url: string,
    originalOptions: RequestInit,
    { response, parsedBody }
  ) {
    if (response.ok) {
      return parsedBody;
    }
    switch (response.status) {
      case 40:
      case 401:
      case 403:
      case 500:
        break;
    }

    throw new BackendError(response, parsedBody);
  }

  // Request
  async genericRequest(method: string, path: string, options: RequestInit) {
    const opt = { ...deepCopy(this.defaultOptions), ...options, method };
    opt.headers = { ...this.defaultOptions.headers, ...options.headers };
    try {
      const accessToken = window.localStorage.getItem(STORAGE_TOKEN_KEY);
      if (accessToken) {
        opt.headers = {
          ...opt.headers,
          Authorization: "Bearer " + accessToken,
        };
      }

      opt.body = JSON.stringify(opt.body, replacer);
      return this.fetch(this.baseUrl + path, opt);
    } catch (error) {
      if (error.errorMessage.indexOf("interaction_required") !== -1) {
        console.log("required authorization failed");
      }
    }
  }

  get(path: string, options: RequestInit = {}) {
    return this.genericRequest("get", path, {
      ...options,
      headers: { ...options.headers },
    });
  }

  post(path: string, options: RequestInit) {
    return this.genericRequest("post", path, options);
  }

  put(path: string, options: RequestInit) {
    return this.genericRequest("put", path, options);
  }

  patch(path: string, options: RequestInit) {
    return this.genericRequest("PATCH", path, options);
  }

  delete(path: string, options: RequestInit) {
    options.headers = options.headers || {};
    options.headers["Accept"] = options.headers["Accept"] || "*";
    return this.genericRequest("delete", path, options);
  }
}
