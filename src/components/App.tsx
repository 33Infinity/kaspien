import React, { useEffect, useState } from "react";
import CSVFileUploader from "../controls/CSVFileUploader";
import "../css/Styles.css";
import ProductService from "../services/Product";
import { confirmWithSingleButton } from "../controls/Confirmation";
import ErrorModel from "../models/Error";
import ProductModel from "../models/Product";
import Product from "./Product";

const App: React.FC = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState<ProductModel[]>([]);
  async function getProducts() {
    const retrievedProducts = await ProductService.getAll();
    setProducts(retrievedProducts);
  }
  async function handleUpload(someJson: unknown) {
    const products = await ProductService.add(someJson);
    if (products instanceof ErrorModel) {
      confirmWithSingleButton("Ok", "Error", products.ErrorMessage);
    } else {
      confirmWithSingleButton("Ok", "Success", "File Uploaded Successfully!");
      getProducts();
    }
  }
  return (
    <div>
      <CSVFileUploader fileUploadCallBack={handleUpload} />
      {products.map((eachProduct) => {
        return <Product product={eachProduct} />;
      })}
    </div>
  );
};

export default App;
