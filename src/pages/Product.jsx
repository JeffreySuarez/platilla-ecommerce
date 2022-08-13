import React from "react";
import styled from "styled-components";
import Anuncios from "../components/Anuncios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Image = styled.img`
  width: 100%;

  object-fit: cover;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 24px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
const ButtonRemove = styled.button`
  background-color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;
const ButtonAdd = styled.button`
  background-color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Anuncios />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/3Cc7Mpm/img4.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Title Product</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            reprehenderit excepturi repudiandae. Odit vero earum esse maiores ut
            eos neque iusto mollitia, explicabo vitae, asperiores accusantium
            hic, sapiente eum in?
          </Description>
          <Price>$ 20.oo</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="green" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <ButtonRemove>-</ButtonRemove>
              <Amount>1</Amount>
              <ButtonAdd>+</ButtonAdd>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
