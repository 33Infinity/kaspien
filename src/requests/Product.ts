import Base from "./Base";
import ProductModel from "../models/Product";
import Endpoints from "../requests/Endpoints";
import HttpMethods from "../requests/HttpMethods";
import { getAllJSDocTags } from "typescript";

export default class Product extends Base {
  static async add(someProductModels: ProductModel[]) {
    let url = Endpoints.Product.add;
    const requestObject = this.buildRequestObject(
      HttpMethods.post,
      someProductModels
    );
    const json = await this.getJson(url, requestObject);
    return json;
  }

  static async getAll() {
    let url = Endpoints.Product.getAll;
    const json = await this.getJson(url, null);
    return json;
  }
}
