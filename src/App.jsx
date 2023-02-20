import "./App.styles.jsx";
import Nav from "./components/nav.component/nav.component";
import ProductHandler from "./components/product-handler/product.handler.component";
import ProductsImages from "./components/products/products.images";
import { ProductData } from "./productData/productData";
import { MainContainer } from "./App.styles.jsx";
import BurgerMenu from "./components/burger-menu/burger-menu.component.jsx";
function App() {
  return (
    <>
      <BurgerMenu />
      <Nav />
      <MainContainer>
        <ProductsImages productData={ProductData} />
        <ProductHandler productData={ProductData} />
      </MainContainer>
    </>
  );
}

export default App;
