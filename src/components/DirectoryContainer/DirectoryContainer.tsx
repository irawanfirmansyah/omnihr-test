import type { ReactNode } from "react";

function DirectoryContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        columnGap: "4px",
      }}
    >
      {children}
    </div>
  );
}

export default DirectoryContainer;
