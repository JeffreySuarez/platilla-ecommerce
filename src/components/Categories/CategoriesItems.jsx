import React from "react";
import styled from "styled-components";
import { categories } from "../../data/data";
import CategorieItem from "./CategorieItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const CategoriesItems = () => {
  return (
    <Container>
      {categories.map((element) => (
        <CategorieItem items={element} key={element.id} />
      ))}
    </Container>
  );
};

export default CategoriesItems;
