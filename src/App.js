import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Typography, Space } from "antd";

import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, WholeLayout, Error } from "./components";
import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<WholeLayout />} errorElement={<Error />}>
    <Route path='/' element={<Homepage />} />
    <Route path='exchanges' element={<Exchanges />} />
    <Route path='cryptocurrencies' element={<Cryptocurrencies />} />
    <Route path='crypto/:uuid' element={<CryptoDetails />} />
    <Route path='news' element={<News />} />
  </Route>
))



const App = () => {
  return (
    <div className="routes" >
      <RouterProvider router={router} />
    </div>
  )
}

export default App