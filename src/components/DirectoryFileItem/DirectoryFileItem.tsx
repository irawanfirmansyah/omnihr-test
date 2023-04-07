import { getFileEntryContent } from "@/data";
import { useState } from "react";
import type { ReactNode } from "react";

function DirectoryFileItem({
  id,
  children,
  dirPath,
}: {
  id: string;
  dirPath: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [contents, setContents] = useState("");

  const handleClick = () => {
    const path = dirPath === "root" ? id : `${dirPath}/${id}`;
    getFileEntryContent(path).then((res) => {
      setContents(res.contents);
      setOpen(true);
    });
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "4px",
        }}
      >
        <p>{children}</p>
      </div>
      {open ? (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "gray",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80vw",
              height: "80vh",
              backgroundColor: "white",
              border: "2px solid",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "2px solid",
                padding: "24px",
              }}
            >
              <div>
                <h2>Filename: {id}</h2>
                <h2>Path Directory: {dirPath}</h2>
              </div>
              <button
                style={{ maxHeight: "60px", minWidth: "80px" }}
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <div
              style={{
                padding: "24px",
              }}
            >
              {contents.length <= 0 ? (
                "... Empty File ..."
              ) : (
                <pre>{contents}</pre>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DirectoryFileItem;
