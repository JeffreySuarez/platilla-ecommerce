import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import styled from "styled-components";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Cart from "./pages/Cart";

const Container = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: 0px;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Container>
      <Cart />
      {/* <Register /> */}
      {/* <Product /> */}
      {/* <Login /> */}
      {/* <ProductList /> */}
      {/* <Home /> */}
    </Container>
  );
}

export default App;
