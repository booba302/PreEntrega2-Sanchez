import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsView from "./views/ProductsView";
import CategoryView from "./views/CategoryView";
import DetailsView from "./views/DetailsView";
import NavBarComponent from "./components/NavBar/NavBarComponent";


function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ProductsView />}></Route>
        <Route path="/category/:category" element={<CategoryView />}></Route>
        <Route path="/products/:id" element={<DetailsView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
