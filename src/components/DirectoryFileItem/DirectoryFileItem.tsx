import { ReactNode } from "react";

function DirectoryFileItem({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: VoidFunction;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px",
      }}
    >
      <p>{children}</p>
    </div>
  );
}

export default DirectoryFileItem;
