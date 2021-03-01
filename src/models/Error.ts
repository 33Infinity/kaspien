export default class Error {
  ErrorMessage: string;

  private constructor(aMessage: string) {
    this.ErrorMessage = aMessage;
  }

  /**
   * @param aMessage error message to display
   */
  public static New(aMessage: string): Error {
    return new Error(aMessage);
  }
}
