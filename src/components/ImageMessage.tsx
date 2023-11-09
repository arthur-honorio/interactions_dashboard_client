import whatsappIcon from "../img/logo.png";
import style from "./ImageMessage.module.css";

export function ImageMessage({
  url,
  name,
}: {
  url?: string | undefined;
  name: string;
}) {
  return (
    <div className={style["image-message-container"]}>
      <img alt="" className={style["whatsapp-icon"]} src={whatsappIcon} />
      <p className={style["user-name"]}>{name}</p>
      <img alt="img" className={style["user-image"]} src={url} />
    </div>
  );
}
