import { DashboardCover } from "../components/DashboardCover";
import { DashboardMessages } from "../components/DashboardMessages";

export function Dashboard({ viewMessages = false, messageIndex = 0 }) {
  if (!viewMessages) {
    return <DashboardMessages messageIndex={messageIndex} />;
  }
  return <DashboardCover />;
}
