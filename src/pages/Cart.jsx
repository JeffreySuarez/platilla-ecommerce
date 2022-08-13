import { AccordionDetails } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Anuncios from "../components/Anuncios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Botton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;

const ProductColors = styled.div`
  display: flex;
`;

const ProductColor = styled.div`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductAmoutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #00000064;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const ContenidoPrice = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const IconDelete = styled.span`
  color: red;
  font-size: 40px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Anuncios />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Botton>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/LRWbJHG/sportswear-1415302.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER{" "}
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 98709834234{" "}
                  </ProductID>
                  <ProductColors>
                    <ProductColor color="orange" />
                  </ProductColors>

                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ContenidoPrice>
                  <ProductAmoutContainer>
                    <AddIcon />
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon />
                  </ProductAmoutContainer>
                  <ProductPrice>$ 25.oo</ProductPrice>
                </ContenidoPrice>
                <IconDelete>
                  <DeleteIcon style={{ fontSize: "40px" }} />
                </IconDelete>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/JFZbxJF/png-clipart-nike-free-sports-shoes-amazon-com-nike-outdoor-shoe-running.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> NIKE
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 98709834234{" "}
                  </ProductID>
                  <ProductColors>
                    <ProductColor color="yellow" />
                  </ProductColors>

                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ContenidoPrice>
                  <ProductAmoutContainer>
                    <AddIcon />
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon />
                  </ProductAmoutContainer>
                  <ProductPrice>$ 25.oo</ProductPrice>
                </ContenidoPrice>
                <IconDelete>
                  <DeleteIcon style={{ fontSize: "40px" }} />
                </IconDelete>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/yfZzKBj/png-transparent-duffel-bags-sportswear-sporting-goods-bag-zipper-blue-luggage-bags.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER{" "}
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 98709834234{" "}
                  </ProductID>
                  <ProductColors>
                    <ProductColor color="orange" />
                  </ProductColors>

                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ContenidoPrice>
                  <ProductAmoutContainer>
                    <AddIcon />
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon />
                  </ProductAmoutContainer>
                  <ProductPrice>$ 45.oo</ProductPrice>
                </ContenidoPrice>
                <IconDelete>
                  <DeleteIcon style={{ fontSize: "40px" }} />
                </IconDelete>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$100.oo</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$10.oo</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- $10.oo</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$100.oo</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Botton>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
