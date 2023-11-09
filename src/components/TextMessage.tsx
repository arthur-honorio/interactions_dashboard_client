import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import whatsappIcon from "../img/logo.png";
import style from "./TextMessage.module.css";

export function TextMessage({
  description,
  slug,
}: {
  description: string;
  slug: string;
}) {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("keydown", handleCloseVideo);
    return () => window.removeEventListener("keydown", handleCloseVideo);
  }, [showVideo]);

  return (
    <div className={style["text-container"]}>
      <img alt="" className={style["whatsapp-icon"]} src={whatsappIcon} />
      <div className={style["text-box"]}>
        <p>
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto textoxto texto texto texto
          textotextotextotextotextotextotextot extotextotextotextotextotexto
          textotextotextotextotextotextotextotextote xtotextotextotextotexto
          texto
        </p>
      </div>
      {slug && (
        <button onClick={handleShowVideo}>
          {<FontAwesomeIcon icon={faVideo} />}
        </button>
      )}
      {showVideo && (
        <div className={style["video-container"]}>
          <video autoPlay controls>
            <source
              src="https://midiat-new.nyc3.cdn.digitaloceanspaces.com/i/wp-content/uploads/sites/5/2023/11/06100429/WhatsApp-Video-2023-11-06-at-10.01.08.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </div>
  );

  function handleShowVideo() {
    setShowVideo((state) => !state);
  }

  function handleCloseVideo(this: Window, e: KeyboardEvent) {
    if (showVideo && e.key == "Escape") {
      setShowVideo(false);
    }
  }
}
