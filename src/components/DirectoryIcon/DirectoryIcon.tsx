/* eslint-disable @next/next/no-img-element */

function DirectoryIcon({
  expanded,
  onClick,
}: {
  expanded?: boolean;
  onClick?: VoidFunction;
}) {
  return (
    <div
      style={{
        width: "16px",
        height: "16px",
        cursor: "pointer",
        padding: "4px",
      }}
      onClick={onClick}
    >
      <img
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
        }}
        alt="arrow"
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Font_Awesome_5_solid_arrow-right.svg"
      />
    </div>
  );
}

export default DirectoryIcon;
