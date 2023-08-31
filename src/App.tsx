import React from "react";
import Header from "./components/headers/Header";

import "./App.scss";
import Navigator from "./components/nav/Navigator";
import { Route, Routes } from "react-router";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <div className="background">
        <div className="contents">
          <Header />
          <Navigator />
          <Routes>
            <Route element={<Section />} path={"/"} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
