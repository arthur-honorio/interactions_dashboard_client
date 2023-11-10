import { DashboardCover } from "../components/DashboardCover";
import { DashboardMessages } from "../components/DashboardMessages";

export function Dashboard({
  viewMessages = false,
  messageIndex = 0,
  setMessageIndex,
}: {
  viewMessages: boolean;
  messageIndex: number;
  setMessageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  if (!viewMessages) {
    return (
      <DashboardMessages
        messageIndex={messageIndex}
        setMessageIndex={setMessageIndex}
      />
    );
  }
  return <DashboardCover />;
}
