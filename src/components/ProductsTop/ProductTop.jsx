import React from "react";
import styled from "styled-components";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Imagen = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;

const ProductTop = ({ productos }) => {
  return (
    <Container>
      <Circle />
      <Imagen src={productos.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductTop;
