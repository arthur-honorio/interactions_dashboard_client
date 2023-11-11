import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ActionsBar } from "./ActionsBar";
import { Dashboard } from "./Dashboard";

import style from "./App.module.css";
import "../index.css";

function App() {
  const [viewMessages, setViewMessages] = useState(false);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={style["app-container"]}>
        <Dashboard
          viewMessages={viewMessages}
          setViewMessages={setViewMessages}
        />
        <ActionsBar
          showMessages={viewMessages}
          setViewMessages={setViewMessages}
        />
      </div>
      <div className={style.background} />
    </QueryClientProvider>
  );
}

export default App;
