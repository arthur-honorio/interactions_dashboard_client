import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ImageMessage } from "./ImageMessage";
import { TextMessage } from "./TextMessage";

import style from "./DashboardMessages.module.css";

type message = {
  id: number;
  message?: string;
  type: "text" | "photo" | "text_video";
  name: string;
  media_url?: string;
};

type messagesProps = message[];

export function DashboardMessages({ messageIndex }: { messageIndex: number }) {
  const [messages, setMessages] = useState<messagesProps>([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      fetch("http://localhost:3001/api/messages").then((res) => res.json()),
  });
  console.log(data);
  if (error) {
    console.error(error);
  } else if (data?.length && messages?.length == 0) {
    setMessages(data);
  }
  if (messages.length > 0) {
    console.log(data[messageIndex]);

    const { message, type, name, media_url } = messages[messageIndex];

    return (
      <>
        {isPending ? (
          "Loading..."
        ) : (
          <div className={style["message-container"]}>
            <div className={style["message-content"]}>
              {type == "photo" ? (
                <ImageMessage name={name} url={media_url} />
              ) : (
                <TextMessage name={name} message={message} url={media_url} />
              )}
            </div>
          </div>
        )}
      </>
    );
  }
  return <></>;
}
