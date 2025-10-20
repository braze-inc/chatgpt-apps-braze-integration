import { createRoot } from "react-dom/client";

import { Inbox } from "./Inbox";

export default function App() {
  return <Inbox />;
}

const root = createRoot(document.getElementById("inbox-root") as HTMLElement);
root.render(<App />);
