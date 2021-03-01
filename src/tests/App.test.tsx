import ProductService from "../services/Product";
import ErrorModel from "../models/Error";

test("Product with missing ASIN", () => {
  const someJson: any = {};
  someJson["ASIN"] = "";
  someJson["Title"] = "A title";
  someJson["Price"] = "123";
  someJson["Net Margin"] = "1.35%";
  const response = ProductService.buildProduct(someJson);
  if (response instanceof ErrorModel) {
    expect(response.ErrorMessage).toEqual("ASIN cannot be empty");
  }
});

test("Product with missing price", () => {
  const someJson: any = {};
  someJson["ASIN"] = "123";
  someJson["Title"] = "A title";
  someJson["Price"] = "";
  someJson["Net Margin"] = "1.35%";
  const response = ProductService.buildProduct(someJson);
  if (response instanceof ErrorModel) {
    expect(response.ErrorMessage).toEqual("Price cannot be empty");
  }
});

test("Product with invalid price", () => {
  const someJson: any = {};
  someJson["ASIN"] = "123";
  someJson["Title"] = "A title";
  someJson["Price"] = "abc";
  someJson["Net Margin"] = "1.35%";
  const response = ProductService.buildProduct(someJson);
  if (response instanceof ErrorModel) {
    expect(response.ErrorMessage).toEqual("abc is an invalid price");
  }
});
