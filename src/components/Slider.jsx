import React, { useState } from "react";
import styled from "styled-components";

//importamos las flechas para mover las imagenes
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

//importamos los datos para el slider
import { sliderItems } from "../data/data";

//generamos todo el style con styled-components del slyder

//estilo contenido principal

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

//Estilo de las flechas
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c6c6c6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;

  //realizamos una condicion si tiene la palabra left devuelve tal propiedad, si tiene right devuelve otra propiedad.

  left: ${({ direction }) => {
    return direction === "left" && "10px";
  }};
  right: ${({ direction }) => {
    return direction === "right" && "10px";
  }};
  margin: auto;
  opacity: 0.5;

  &:hover {
    background-color: #ffffff;
  }

  z-index: 2;
`;

//El Wrapper es como el contenido donde va a estar alojada el slider

const Wrapper = styled.div`
  height: 100%;
  display: flex;

  transition: all 1.5s ease-in-out;

  /* aca realizaremos la propiedad que se va a modificar para que se vea el movimiento del slider al usar la funcion HandleClick */

  transform: translateX(${(props) => props.slide * -100}vw);
`;

// es otro contenedor de las imagenes como el ImageContainer y el InfoContainer
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* background-color: #${(props) => props.bg}; */
`;

// odo el contenido del ImageContainer

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  height: 80%;
`;

// odo el contenido del InfoContainer

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  //creamos los estados para mover el slider
  const [slide, setSlide] = useState(0);

  const HandleClick = (direction) => {
    //si direccion contiene la palabra left, modifica el estado de la siguiente manera.
    //si slide es mayor que 0 le retrocede 1 si no va al ultimo
    //ahora si slide es menor que el ultimo incrementa 1 o si no queda en 0

    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : sliderItems.length - 1);
    } else {
      setSlide(slide < sliderItems.length - 1 ? slide + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => HandleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>

      <Wrapper slide={slide}>
        {sliderItems.map((e) => {
          return (
            <Slide bg={e.bg} key={e.id}>
              <ImageContainer>
                <Image src={e.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{e.title}</Title>
                <Description>{e.desc}</Description>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      {/* //en el Arrow colocamos una propiedad direction con esta propiedad el
      slider se movera ya sea para la derecha o izquierda cuando hagamos click
      en ella, por esa razon tiene otra propiedad que es el onClick que llama
      una funcion HandleClick */}
      <Arrow direction="right" onClick={() => HandleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
