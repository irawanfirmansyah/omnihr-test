import { Directory } from "@/components";
import { getDirectoryEntries } from "@/data";
import { FileSystemEntry, FileSystemDirectory } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <h1>Component Directory</h1>
      <Directory id="root" defaultExpanded />
    </>
  );
}
