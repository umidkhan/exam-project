import React from "react";
import HumanImage from "../images/human.png";
import Line4 from "../images/Line4.png";
import "./Section.css";

export default function Section() {
  return (
    <>
      <section className="section1 d-flex">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="section1Title">Шеф-повар Сергей Громов</h1>
              <img src={Line4} alt="png" />
              <p className="section1Text">
                Известный многим по проектам «Caviar Bar TSUM» и «Ketch Up».
                Теперь приглашает Вас попробовать наше осеннее меню, которое
                идеально подойдет для любителей совмещать традиционные блюда
                различных кухонь мира
              </p>
            </div>
            <div className="col-4 text-center">
              <div className="section1Col text-center">
              <img src={HumanImage} alt="png" className="humanImage" />
                <p className="section1ImgText">Если цель не еда, то что?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
