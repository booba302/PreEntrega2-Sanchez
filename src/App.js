import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsView from "./views/ProductsView";
import ElectronicView from "./views/ElectronicView";
import JeweleryView from "./views/JeweleryView";
import MenView from "./views/MenView";
import WomenView from "./views/WomenView";
import DetailsView from "./views/DetailsView";
import NavBarComponent from "./components/NavBar/NavBarComponent";


function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ProductsView />}></Route>
        <Route path="/category/electronics" element={<ElectronicView />}></Route>
        <Route path="/category/jewelery" element={<JeweleryView />}></Route>
        <Route path="/category/men's clothing" element={<MenView />}></Route>
        <Route path="/category/women's clothing" element={<WomenView />}></Route>
        <Route path="/products/:id" element={<DetailsView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
