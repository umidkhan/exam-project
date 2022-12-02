import React from "react";
import "./Section.css";
import Humans from "../images/humans.png";

export default function Section_2() {
  return (
    <>
      <section className="section2">
        <img src={Humans} alt="png" className="humansImage" />
      </section>
    </>
  );
}
