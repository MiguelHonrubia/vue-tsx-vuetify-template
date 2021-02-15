export class BackendError extends Error {
  public response;
  public parsedBody;
  public isBackendError;
  constructor(response: any, parsedBody: any) {
    super(response.statusText);
    this.name = "BackendError";
    this.response = response;
    this.parsedBody = parsedBody;

    this.isBackendError = true;
  }
}
