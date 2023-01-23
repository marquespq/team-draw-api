export default class ApiReturnError {
  message: string;

  payload: {};

  error: boolean;

  constructor({
    payload = {},
    message = 'Ocorreu um erro durante a operação.',
  }) {
    this.message = message;
    this.payload = payload;
    this.error = true;
  }
}
