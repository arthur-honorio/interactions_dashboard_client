import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import style from "./Video.module.css";

export function Video({
  showVideo,
  url,
  toggleShowVideo, // Corrigi o nome da função para "toggleShowVideo"
}: {
  showVideo: boolean;
  url: string | undefined;
  toggleShowVideo: () => void;
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleCloseOnEscVideo = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleShowVideo();
      }
    };

    if (showVideo) {
      window.addEventListener("keydown", handleCloseOnEscVideo);
    }

    return () => {
      window.removeEventListener("keydown", handleCloseOnEscVideo);
    };
  }, [showVideo, toggleShowVideo]);

  // Overlay JSX
  const overlay = showVideo ? (
    <div className={style["overlay"]} onClick={toggleShowVideo} />
  ) : null;

  return (
    <>
      {overlay}
      <div className={`${style["video-container"]} ${showVideo ? style["active"] : ""}`} ref={videoRef}>
        <button onClick={toggleShowVideo}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <video autoPlay controls>
          <source src={url} type="video/mp4" />
        </video>
      </div>
    </>
  );
}