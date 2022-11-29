import React from "react";
import "./Navbar.css";
import firstVector from "../images/two-vectors.png";
import Logo from "../images/logo.png";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container text-center">
          <div className="row text-center" style={{ alignItems: "center" }}>
            <div className="col-3">
              <img src={firstVector} alt="vector" className="firstVector" />
            </div>
            <div className="col-6">
              <img src={Logo} alt="" className="navLogo" />
            </div>
            <div className="col-3">
              <div className="callIcon">
                <CallOutlinedIcon sx={{color: "white"}} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
