import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../data/data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((e) => (
        <Product product={e} key={e.id} />
      ))}
    </Container>
  );
};

export default Products;
