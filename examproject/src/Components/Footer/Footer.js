import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h4 className="footerText">
                По вопросам брони столов и мероприятий
              </h4>
              <h4 className="tel">+7 (495) 414-10-33</h4>
            </div>
            <div className="col-4">
              <p className="footerTime">
                Время работы ежедневно: 10:00 - 22:00
              </p>
              <p className="footerAddress">Ленинская Слобода 26с21</p>
              <p className="footerEmail">tochkacafemsk@yandex.ru</p>
            </div>
            <div className="col-3 d-flex">
              <div className="instagram">
                <a
                  href="https://instagram.com/umidxon_developer"
                  className="instagramLink"
                  target="_blank"
                  rel="noopener noreferrer">
                  <InstagramIcon sx={{ color: "white", fontSize: "20px" }} />
                </a>
              </div>
              <div className="telegram">
                <a href="https://t.me/U_Coding" className="telegramLink">
                  <TelegramIcon sx={{ color: "white", fontSize: "20px" }} />
                </a>
              </div>
              <div className="whatsapp">
                <a href="https://www.whatsapp.com/" className="whatsappLink">
                  <WhatsAppIcon sx={{ color: "white", fontSize: "20px" }} />
                </a>
              </div>
              <div className="viber">
                <a href="https://www.viber.com/" className="viberLink">
                  <i class="fa-brands fa-viber"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
