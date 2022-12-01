import React from "react";
import "./Navbar.css";
import firstVector from "../images/two-vectors.png";
import Logo from "../images/logo.png";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="conteiner text-center">
          <div className="row align-text-bottom">
            <div className="col-3">
              <img src={firstVector} alt="vector" className="navVector"/>
            </div>
            <div className="col-7">
              <img src={Logo} alt="logo" className="navLogo"/>
            </div>
            <div className="col-1">
              <div
                className="callBox"
                style={{
                  background: "#fc466b",
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <CallOutlinedIcon sx={{color: "white"}}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
