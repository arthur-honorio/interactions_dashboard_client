import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ActionsBar } from "./ActionsBar";
import { Dashboard } from "./Dashboard";

import style from "./App.module.css";

function App() {
  const [viewMessages, setViewMessages] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={style["app-container"]}>
        <Dashboard
          viewMessages={viewMessages}
          messageIndex={messageIndex}
          setMessageIndex={setMessageIndex}
        />
        <ActionsBar
          showMessages={viewMessages}
          setViewMessages={setViewMessages}
          setMessageIndex={setMessageIndex}
          messageIndex={messageIndex}
        />
        <div className={style.background} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
