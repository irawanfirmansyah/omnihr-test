import type { ReactNode } from "react";

function DirectoryTitle({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "4px" }}>
      <p>{children}</p>
    </div>
  );
}

export default DirectoryTitle;
