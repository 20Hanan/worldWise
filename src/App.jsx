import { useState,useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/appLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
function App() {
const [cities,setCities] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const BASE_URL = "http://localhost:8000";
useEffect(function (){
async function fetchCities() {
  try {
     setIsLoading(true);
  const res=await fetch(`${BASE_URL}/cities`);
  const data = await res.json();
  setCities(data);
  } catch (error) {
    console.error("Error fetching cities:", error);
  } finally {
    setIsLoading(false);
  }
  
}
fetchCities();
},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/product"
          element={<Product />}
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />
        <Route
          path="/app"
          element={<AppLayout />}
        >
          <Route
            index
            element={
              <CityList
                isLoading={isLoading}
                cities={cities}
              />
            }
          />
          <Route
            path="cities"
            element={
              <CityList
                isLoading={isLoading}
                cities={cities}
              />
            }
          />
          <Route path="cities/:id" element={<City/>}/>
          <Route
            path="countries"
            element={
              <CountryList
                isLoading={isLoading}
                cities={cities}
              />
            }
          />
          <Route
            path="form"
            element={<p>form</p>}
          />
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
