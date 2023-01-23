export default class ApiReturnSuccess {
  message: string;

  payload: {};

  constructor(payload = {}) {
    this.message = 'Operação realizada com sucesso.';
    this.payload = payload;
  }
}
