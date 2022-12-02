import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section_1/Section_1";
import Section2 from "./Components/Section_2/Section_2";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
    </>
  );
}
