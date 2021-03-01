export default class Base {
  static isApiError(someJson: any) {
    return someJson != null && someJson.ErrorMessage != null;
  }
}
