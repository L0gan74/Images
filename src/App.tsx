import React from "react";
import Main from "./page/homePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/components/layout/layout";
import CountrieId from "./page/countrieId";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Main />} />
          <Route path="/:common" element={<CountrieId />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
