import React from "react";
import styled from "styled-components";
import { allProducts } from "../../data/data";
import ProductTop from "../ProductsTop/ProductTop";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductsTop = () => {
  return (
    <Container>
      {allProducts.map((e) => (
        <ProductTop productos={e} key={e.id} />
      ))}
    </Container>
  );
};

export default ProductsTop;
