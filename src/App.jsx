import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/appLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/product" element={<Product />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/app" element={<AppLayout />} >
    <Route index element={<CityList />} />
    <Route path="cities" element={<CityList />} />
    <Route path="countries" element={<p>countries</p>} />
    <Route path="form" element={<p>form</p>} />
  </Route>
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
