import "./App.styles.jsx";
import Nav from "./components/nav.component/nav.component";
import ProductHandler from "./components/product-handler/product.handler.component";
import ProductsImages from "./components/products/products.images";
import { ProductData } from "./productData/productData";
import { MainContainer } from "./App.styles.jsx";
import ModalPopupHandler from "./components/modal-popup/modal-popup-handler/modal-popup-handler.component.jsx";
function App() {
  return (
    <>
      <Nav />
      <MainContainer>
        <ProductsImages productData={ProductData} />
        <ProductHandler productData={ProductData} />
      </MainContainer>
    </>
  );
}

export default App;
