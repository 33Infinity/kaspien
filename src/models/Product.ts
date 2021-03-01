export default class Product {
  ASIN: string;
  Title: string;
  Price: string;
  Margin: string;

  private constructor(
    anASIN: string,
    aTitle: string,
    aPrice: string,
    aMargin: string
  ) {
    this.ASIN = anASIN;
    this.Title = aTitle;
    this.Price = aPrice;
    this.Margin = aMargin;
  }

  /**
   * @param anASIN uniquely identifies product
   * @param aTitle description of product
   * @param aPrice price of product
   * @param aMargin margin of product
   */
  public static New(
    anASIN: string,
    aTitle: string,
    aPrice: string,
    aMargin: string
  ): Product {
    return new Product(anASIN, aTitle, aPrice, aMargin);
  }
}
