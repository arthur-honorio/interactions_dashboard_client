import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1500 },
    items: 1,
  },
  desktopinho: {
    breakpoint: { max: 1500, min: 900 },
    items: 1,
  },
};

export function DashboardMessages() {
  const [messages, setMessages] = useState<messagesProps>([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      fetch(
        "ep-delicate-wildflower-87115738-pooler.us-east-1.postgres.vercel-storage.com/api/messages"
      ).then((res) => res.json()),
  });

  if (error) return <div>Error loading messages</div>;
  if (isPending) return <div>Loading...</div>;

  if (data?.length && messages?.length === 0) {
    setMessages(data);
  }

  return (
    <Carousel responsive={responsive} itemClass={style["message-content"]}>
      {messages.map((m) => (
        <div className={style["message-content"]} draggable={false}>
          {m.type === "photo" ? (
            <ImageMessage name={m.name} url={m.media_url} />
          ) : (
            <TextMessage name={m.name} message={m.message} url={m.media_url} />
          )}
        </div>
      ))}
    </Carousel>
  );
}
