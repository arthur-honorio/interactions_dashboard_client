import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilter,
  faRefresh,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import logoImg from "../img/logo-tv.png";
import style from "./ActionBar.module.css";

type ActionsBarProps = {
  showMessages: boolean;
  setViewMessages: (state: boolean) => void;
};

export function ActionsBar({
  showMessages = false,
  setViewMessages,
}: ActionsBarProps) {
  return (
    <div className={style["buttons-container"]}>
      {showMessages ? (
        <>
          <button onClick={toggleMessages}>
            <FontAwesomeIcon icon={faHome} />
          </button>
          <div className={style.separator} />
          <button>
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <div className={style.separator} />
          <button>
            <FontAwesomeIcon icon={faRefresh} />
          </button>
        </>
      ) : null}
      <img alt="logo tv" className={style.signature} src={logoImg} />
    </div>
  );

  function toggleMessages() {
    setViewMessages(!showMessages);
  }
}
