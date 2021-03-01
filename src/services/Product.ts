import ErrorModel from "../models/Error";
import ProductModel from "../models/Product";
import StringUtil from "../utils/String";
import ProductRequest from "../requests/Product";
import Base from "./Base";

export default class Product extends Base {
  public static async add(someJson: any): Promise<ErrorModel | null> {
    const products: ProductModel[] = [];
    if (someJson.length === 0) {
      return ErrorModel.New("File contained no data");
    }
    for (let i = 0; i < someJson.length; i++) {
      const product = this.buildProduct(someJson[i]);
      if (product instanceof ErrorModel) {
        return product;
      }
      products.push(product);
    }
    const json = await ProductRequest.add(products);
    if (this.isApiError(json)) {
      return ErrorModel.New(json.ErrorMessage);
    }
    return null;
  }

  public static async getAll(): Promise<ProductModel[]> {
    const json = await ProductRequest.getAll();
    if (json === null) return [];
    const products: ProductModel[] = [];
    for (let i = 0; i < json.length; i++) {
      products.push(
        ProductModel.New(
          json[i]["asin"],
          json[i]["title"],
          json[i]["price"],
          json[i]["margin"]
        )
      );
    }
    return products;
  }

  static buildProduct(someJson: any): ProductModel | ErrorModel {
    const errorMessage = this.validate(someJson);
    if (!StringUtil.nullOrEmpty(errorMessage)) {
      return ErrorModel.New(errorMessage);
    }
    return ProductModel.New(
      someJson["ASIN"],
      someJson["Title"],
      someJson["Price"],
      someJson["Net Margin"]
    );
  }

  private static validate(someJson: any): string {
    if (StringUtil.nullOrEmpty(someJson["ASIN"])) {
      return "ASIN cannot be empty";
    }
    if (StringUtil.nullOrEmpty(someJson["Title"])) {
      return "Description cannot be empty";
    }
    if (StringUtil.nullOrEmpty(someJson["Price"])) {
      return "Price cannot be empty";
    }
    if (isNaN(Number(someJson["Price"]))) {
      return `${someJson["Price"]} is an invalid price`;
    }
    if (StringUtil.nullOrEmpty(someJson["Net Margin"])) {
      return "Margin cannot be empty";
    }
    const marginWithoutPercentage = someJson["Net Margin"].slice(0, -1); //Trim last character
    if (StringUtil.nullOrEmpty(marginWithoutPercentage)) {
      return "Margin cannot be empty";
    }
    if (isNaN(Number(marginWithoutPercentage))) {
      return `${marginWithoutPercentage} is an invalid margin`;
    }
    return "";
  }
}
