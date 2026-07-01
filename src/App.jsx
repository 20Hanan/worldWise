import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const AppLayout = lazy(() => import("./pages/AppLayout.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const ProtactedRoute = lazy(() => import("./pages/ProtactedRoute.jsx"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
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
                element={
                  <ProtactedRoute>
                    <AppLayout />
                  </ProtactedRoute>
                }
              >
                <Route
                  index
                  element={
                    <Navigate
                      replace
                      to="cities"
                    />
                  }
                />

                <Route
                  path="cities"
                  element={<CityList />}
                />
                <Route
                  path="cities/:id"
                  element={<City />}
                />
                <Route
                  path="countries"
                  element={<CountryList />}
                />
                <Route
                  path="form"
                  element={<Form />}
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
