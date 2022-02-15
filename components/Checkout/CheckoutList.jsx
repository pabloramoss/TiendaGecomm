import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

function CheckoutList({ product }) {
  const iva = 21;
  const subTotal = () => product.price * (1 + iva / 100);

  return (
    <Grid templateColumns="5fr repeat(4,1fr)" borderColor="red">
      <GridItem>{product.title}</GridItem>
      <GridItem justifySelf="center">{product.amount}</GridItem>
      <GridItem justifySelf="center" mx={3}>
        USD
        {product.price}
      </GridItem>
      <GridItem justifySelf="center">{iva}</GridItem>
      <GridItem justifySelf="center">
        USD
        {subTotal()}
      </GridItem>
    </Grid>
  );
}

export default CheckoutList;
