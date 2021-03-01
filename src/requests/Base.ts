import ErrorModel from "../models/Error";

export default class Base {
  static async getJson(aUrl: string, aRequesObject: any) {
    try {
      let response;
      if (aRequesObject == null) {
        response = await fetch(aUrl);
      } else {
        response = await fetch(aUrl, aRequesObject);
      }
      const json = await response.json();
      return json;
    } catch (exception) {
      return ErrorModel.New(exception);
    }
  }

  static buildRequestObject(anHttpMethod: unknown, someData: unknown) {
    return {
      method: anHttpMethod,
      body: JSON.stringify(someData),
    };
  }
}
