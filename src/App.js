import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Typography, Space } from "antd";

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, HoleLayout } from "./components";
import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<HoleLayout />}>
    <Route path='/' element={<Homepage />} />
    <Route path='exchanges' element={<Exchanges />} />
    <Route path='cryptocurrencies' element={<Cryptocurrencies />} />
    <Route path='crypto/:coinId' element={<CryptoDetails />} />
    <Route path='news' element={<News />} />
  </Route>
))



const App = () => {
  return (
    <div div className="routes" >
      <RouterProvider router={router} />
    </div>
  )
}

export default App