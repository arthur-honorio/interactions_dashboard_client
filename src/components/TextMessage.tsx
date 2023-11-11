import style from "./TextMessage.module.css";
import { UserInfo } from "./UserInfo";
import { MessageContent } from "./MessageContent";

export function TextMessage({
  message,
  url,
  name,
}: {
  name: string;
  message?: string;
  url?: string;
}) {
  return (
    <div className={style["text-container"]}>
      <UserInfo name={name} />
      <MessageContent message={message} url={url} />
    </div>
  );
}
