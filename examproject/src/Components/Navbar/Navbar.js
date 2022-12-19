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
          <div className="row align-text-bottom myRow">
            <div className="col-4 xs">
              <img src={firstVector} alt="vector" className="navVector" />
            </div>
            <div className="col-5 sm-2">
              <img src={Logo} alt="logo" className="navLogo" />
            </div>
            <div className="col-3">
              <div className="callBox">
                <CallOutlinedIcon sx={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
