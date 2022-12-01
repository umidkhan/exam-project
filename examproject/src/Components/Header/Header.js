import React from "react";
import CuttedImage from "../images/cutted-image.png";
import "./Header.css"

export default function Header() {
  return (
    <>
      <header>
        <div className="container d-flex">
          <div className="row">
            <div className="col-5">
              <h1 className="headerTitle">ГАСТРО - БИСТРО</h1>
              <p className="headerText">
                Сочетающее в себе фьюжн израильской, европейской и азиатской
                кухни, в уютном лофт пространстве, где Вас всегда ждут на
                завтрак, сытный обед или легкий ужин. А так же площадка с
                безграничными возможностями в организации камерных мероприятий и
                семейных застолий
              </p>
              <div className="headerBtnGroup">
                <button className="headerBtn1">Резерв стола</button>
                <button className="headerBtn2">Заявка на мероприятие</button>
              </div>
            </div>
            <div className="col-6">
              <img src={CuttedImage} alt="" className="headerImage" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
