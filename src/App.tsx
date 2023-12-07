import Header from "./components/headers/Header";

import "./App.scss";
import Navigator from "./components/nav/Navigator";

import { Route, Routes } from "react-router";

import Footer from "./components/footer/Footer";
import Section from "./components/section/Section";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";
import Test from "./components/test/Test";

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="contents">
        <Header />
        <Section>
          <Routes>
            <Route element={<Main />} path={"/"} />
            <Route element={<Profile />} path={"/profile"} />
          </Routes>
        </Section>
        <Footer />
      </div>
    </>
  );
}

export default App;
