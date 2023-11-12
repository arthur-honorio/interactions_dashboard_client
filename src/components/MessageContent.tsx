import { useState } from "react";
import ReactDOM from "react-dom";

import { Video } from "./Video";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import style from "./MessageContent.module.css";

export function MessageContent({
  message,
  url,
}: {
  message: string | undefined;
  url: string | undefined;
}) {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const portal = document.getElementById("portal-root");

  const videoPortal =
    showVideo && portal
      ? ReactDOM.createPortal(
          <Video
            url={url}
            showVideo={showVideo}
            toggleShowVideo={toggleShowVideo}
          />,
          portal
        )
      : null;

  return (
    <>
      <div className={style["text-box"]}>
        <p>{message}</p>
      </div>
      {url && (
        <button onClick={toggleShowVideo}>
          {<FontAwesomeIcon icon={faVideo} />}
        </button>
      )}
      {videoPortal}
    </>
  );

  function toggleShowVideo() {
    setShowVideo((state) => !state);
  }
}
