export default class String {
  static nullOrEmpty(aValue: any) {
    if (typeof aValue != "undefined" && aValue) return false;
    return true;
  }
}
