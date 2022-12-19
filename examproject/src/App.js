import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section_1/Section_1";
import Section2 from "./Components/Section_2/Section_2";
import Section3 from "./Components/Section_3/Section_3";
import Section4 from "./Components/Section_4/Section_4";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
