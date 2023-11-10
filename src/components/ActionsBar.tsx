import {
  QueryClientProvider,
  QueryClient,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowLeft,
  faArrowRight,
  faFilter,
  faRefresh,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import logoImg from "../img/logo-tv.png";
import style from "./ActionBar.module.css";

type ActionsBarProps = {
  showMessages: boolean;
  setViewMessages: (state: boolean) => void;
  setMessageIndex: React.Dispatch<React.SetStateAction<number>>;
  messageIndex: number;
};

export function ActionsBar({
  showMessages = false,
  setViewMessages,
  setMessageIndex,
  messageIndex,
}: ActionsBarProps) {
  const queryClient = new QueryClient();
  const { data }: UseQueryResult<any | Error, Error> = useQuery({
    queryKey: ["messages"],
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className={style["buttons-container"]}>
        {!showMessages ? (
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
        ) : (
          <button onClick={toggleMessages}>
            <FontAwesomeIcon icon={faMessage} />
          </button>
        )}
        <img alt="logo tv" className={style.signature} src={logoImg} />
      </div>
    </QueryClientProvider>
  );

  function toggleMessages() {
    setViewMessages(!showMessages);
    setMessageIndex(0);
  }
}
