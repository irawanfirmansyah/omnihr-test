import { useEffect } from "react";
import { DirectoryProps } from "./types";
import { useDirectory } from "./useDirectory";

function Directory({ id, defaultExpanded }: DirectoryProps) {
  const { expanded, initData } = useDirectory(id, defaultExpanded);

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
      <svg
        style={{
          transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" />
      </svg>
      <p>{id}</p>
    </div>
  );
}

export default Directory;
