import { DashboardCover } from "../components/DashboardCover";
import { DashboardMessages } from "../components/DashboardMessages";

export function Dashboard({
  viewMessages = false,
  setViewMessages,
}: {
  viewMessages: boolean;
  setViewMessages: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (viewMessages) {
    return <DashboardMessages />;
  }
  return <DashboardCover setViewMessages={setViewMessages} />;
}
