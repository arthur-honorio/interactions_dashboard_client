import whatsappIcon from "../img/logo.png";

import style from "./UserInfo.module.css";

export function UserInfo({ name }: { name: string }) {
  return (
    <div className={style["user-info"]}>
      <img alt="" className={style["whatsapp-icon"]} src={whatsappIcon} />
      <span className={style["user-name"]}>{name}</span>
    </div>
  );
}
