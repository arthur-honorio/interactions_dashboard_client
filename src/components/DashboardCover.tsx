import WhatsappIcon from "../img/logo.png";

import style from "./DashboardCover.module.css";

export function DashboardCover() {
  return (
    <div className={style["dashboard-container"]}>
      <div className={style["dashboard-content"]}>
        <div className={style["dashboard-title"]}>
          <p>Entre em contato conosco</p>
          <p>através do nosso Whatsapp</p>
        </div>
        <div className={style["info"]}>
          <span className="whatsapp-number">(82) 3512-0931</span>
        </div>
        <img
          alt="whatsapp icon"
          className={style["whatsapp-logo"]}
          src={WhatsappIcon}
        />
      </div>
    </div>
  );
}
