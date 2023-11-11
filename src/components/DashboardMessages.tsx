import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ImageMessage } from "./ImageMessage";
import { TextMessage } from "./TextMessage";
import { LoadSpinner } from "./LoadSpinner";

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
  all: {
    breakpoint: { max: 4000, min: 300 },
    items: 1,
  },
};

export function DashboardMessages() {
  const [messages, setMessages] = useState<messagesProps>([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      fetch(
        "https://interactions-dashboard-server-5mki.vercel.app/api/messages"
      ).then((res) => res.json()),
  });

  if (error) return <div>Error loading messages</div>;
  if (isPending) return <LoadSpinner />;

  if (data?.length && messages?.length === 0) {
    setMessages(data);
  }

  return (
    <Carousel
      arrows={window.innerWidth > 700}
      responsive={responsive}
      itemClass={style["message-container"]}
    >
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
