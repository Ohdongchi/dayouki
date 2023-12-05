import Header from "./components/headers/Header";

import "./App.scss";
import Navigator from "./components/nav/Navigator";

import { Route, Routes } from "react-router";

import Footer from "./components/footer/Footer";
import Section from "./components/section/Section";

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="contents">
        <Header />
        <Navigator />
        <Routes>
          <Route element={<Section />} path={"/"} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
