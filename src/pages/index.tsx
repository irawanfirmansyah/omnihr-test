import { getFiles } from "@/data";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getFiles();
    getFiles({ path: "directory-1" });
    getFiles({ path: "directory-1/directory-1a" });
    getFiles({ path: "directory-1/directory-1a/directory-1aA" });
    getFiles({ path: "directory-1/directory-1a/directory-1aA/directory-1aA1" });
  }, []);

  return (
    <>
      <h1>Component Directory</h1>
    </>
  );
}
