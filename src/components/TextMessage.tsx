import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
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
  const videoRef = useRef(null);

  useEffect(() => {
    if (showVideo) {
      window.addEventListener("keydown", handleCloseOnEscVideo);
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleCloseOnEscVideo);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showVideo]);

  const portal = document.getElementById("portal-root");

  const videoPortal =
    showVideo && portal
      ? ReactDOM.createPortal(
          <div className={style["video-container"]}>
            <button onClick={toogleShowVideo}>
              {<FontAwesomeIcon icon={faClose} />}
            </button>
            <video autoPlay controls ref={videoRef}>
              <source src={url} type="video/mp4" />
            </video>
          </div>,
          portal
        )
      : null;

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
      {videoPortal}
    </div>
  );

  function toogleShowVideo() {
    setShowVideo((state) => !state);
  }

  function handleCloseOnEscVideo(this: Window, e: KeyboardEvent) {
    if (showVideo && e.key == "Escape") {
      setShowVideo(false);
    }
  }

  function handleClickOutside(this: Window, e: MouseEvent) {
    if (videoRef.current && e.target && videoRef.current !== e.target)
      setShowVideo(false);
  }
}
