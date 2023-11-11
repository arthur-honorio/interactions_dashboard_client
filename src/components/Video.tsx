import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import style from "./Video.module.css";

export function Video({
  showVideo,
  url,
  toogleShowVideo,
}: {
  showVideo: boolean;
  url: string | undefined;
  toogleShowVideo: () => void;
}) {
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

  return (
    <div className={style["video-container"]}>
      <button>{<FontAwesomeIcon icon={faClose} />}</button>
      <video autoPlay controls ref={videoRef}>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );

  function handleCloseOnEscVideo(this: Window, e: KeyboardEvent) {
    if (showVideo && e.key == "Escape") {
      toogleShowVideo();
    }
  }

  function handleClickOutside(e: MouseEvent) {
      if (videoRef.current && e.target) {
        const rect = videoRef.current.getBoundingClientRect();
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          toogleShowVideo();
        }
      }
    }
}
