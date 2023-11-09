import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faClose } from "@fortawesome/free-solid-svg-icons";

import whatsappIcon from "../img/logo.png";
import style from "./TextMessage.module.css";

export function TextMessage({
  message,
  url,
  name,
}: {
  name: string;
  message?: string;
  url?: string;
}) {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("keydown", handleCloseVideo);
    return () => window.removeEventListener("keydown", handleCloseVideo);
  }, [showVideo]);

  return (
    <div className={style["text-container"]}>
      <div className={style["user-info"]}>
        <img alt="" className={style["whatsapp-icon"]} src={whatsappIcon} />
        <span className={style["user-name"]}>{name}</span>
      </div>
      <div className={style["text-box"]}>
        <p>{message}</p>
      </div>
      {url && (
        <button onClick={toogleShowVideo}>
          {<FontAwesomeIcon icon={faVideo} />}
        </button>
      )}
      {showVideo && (
        <div className={style["video-container"]}>
          <button onClick={toogleShowVideo}>
            {<FontAwesomeIcon icon={faClose} />}
          </button>
          <video autoPlay controls>
            <source src={url} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );

  function toogleShowVideo() {
    setShowVideo((state) => !state);
  }

  function handleCloseVideo(this: Window, e: KeyboardEvent) {
    if (showVideo && e.key == "Escape") {
      setShowVideo(false);
    }
  }
}
