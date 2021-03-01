import React from "react";
import ProductModel from "../models/Product";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

interface Props {
  product: ProductModel;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={2}>
          <Typography component="h5" variant="h5">
            {product.ASIN}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography component="h5" variant="h5">
            {product.Title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Typography component="h5" variant="h5">
            {`$${product.Price}`}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Typography component="h5" variant="h5">
            {`${product.Margin}%`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
