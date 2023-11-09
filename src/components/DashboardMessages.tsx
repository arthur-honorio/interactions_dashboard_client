import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ImageMessage } from "./ImageMessage";
import { TextMessage } from "./TextMessage";

import style from "./DashboardMessages.module.css";

type message = {
  id: number;
  content: string | null;
  media?: string | null;
  createdAt: string;
  user: string;
};

type messageMock = {
  description: string;
  company_name: string | null;
  slug?: string | undefined;
};

type messagesProps = message[];

export function DashboardMessages({ messageIndex }: { messageIndex: number }) {
  const [messages, setMessages] = useState<messageMock[]>([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      fetch("https://www.arbeitnow.com/api/job-board-api").then((res) =>
        res.json()
      ),
  });
  if (error) {
    console.error(error);
  } else if (data?.data && messages.length == 0) {
    setMessages(data.data);
    console.log(data, messageIndex);
  }
  if (messages.length > 0) {
    const { slug, company_name, description } = messages[messageIndex];

    return (
      <>
        {isPending ? (
          "Loading..."
        ) : (
          <div className={style["message-container"]}>
            <div className={style["message-content"]}>
              <div className={style["user-info"]}>
                <span className={style["user-name"]}>Usuário</span>
              </div>
              {!slug ? (
                <ImageMessage />
              ) : (
                <TextMessage slug={slug} description={description} />
              )}
            </div>
          </div>
        )}
      </>
    );
  }
  return <></>;
}
