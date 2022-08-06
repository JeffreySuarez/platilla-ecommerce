import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Anuncios = () => {
  return (
    <Container>
      Gran Oferta, envio gratis por compras superiores a $200.000=
    </Container>
  );
};

export default Anuncios;
