import React from "react";
import "./Section3.css";
import VerticalVector from "../images/verticalvector.png";
import Line4 from "../images/Line4.png";
import Food1 from "../images/food1.png";
import Food2 from "../images/food2.png";
import Food3 from "../images/food3.png";

export default function Section_3() {
  return (
    <>
      <section className="section3">
        <div className="section3Vector">
          <img src={VerticalVector} alt="png" className="verticalVector" />
        </div>
        <div className="container mycontainer">
          <div className="row">
            <div className="col-9">
              <h1 className="section3Title">Сочетание несочетаемого</h1>
              <img src={Line4} alt="png" />
              <p className="section3Text">
                Мы обновляем меню каждые три месяца, готовим блюда различных
                кухонь мира. У нас всегда можно вкусно позавтракать, сытно
                пообедать и вальяжно поужинать.
              </p>
            </div>
            <div className="col-3">
              <img src={Food1} alt="" className="food1" />
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <img src={Food2} alt="" className="food2" />
            </div>
            <div className="col-3">
              <h1 className="section3Title">Авторская классика</h1>
              <img src={Line4} alt="png" />
              <p className="section3Text">
                Большой выбор заварных чаев и авторских напитков не оставит вас
                равнодушными. Мы часто обновляем меню, добавляя сезонные
                новинки.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <h1 className="section3Title">Мероприятие под ключ</h1>
              <img src={Line4} alt="png" />
              <p className="section3Text3">
                Мы любим проводить мероприятия, потому что у нас есть все
                условия. Отдельно стоящий лофт, большая веранда, возможность
                шуметь всю ночь, своя кухня, банкетные менеджеры любящие свое
                дело. Это все что нужно для идеального праздника.
              </p>
            </div>
            <div className="col-3">       
              <img src={Food3} alt="" className="food3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
