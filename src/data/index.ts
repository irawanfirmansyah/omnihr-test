import { Directory, FileEntry } from "@/types";

const API_URL = "http://localhost:8080/";

const ENDPOINTS = {
  fileSystem: "fs",
} as const;

const defaultPath = "root";

export function getDirectory(
  { path }: { path?: string } = { path: defaultPath }
) {
  const url = new URL(`${API_URL}${ENDPOINTS.fileSystem}`);
  url.searchParams.append("path", path || defaultPath);

  return fetch(url.href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error();
    })
    .then((data: Directory) => {
      return data;
    })
    .catch((_err) => {
      const emptyDir: Directory = {
        id: url.searchParams.get(path || defaultPath)?.toString() || "",
        entries: [],
      };
      return emptyDir;
    });
}

export function getFileEntryContent(path: string): Promise<FileEntry> {
  const url = new URL(`${API_URL}${ENDPOINTS.fileSystem}`);
  url.searchParams.append("path", path);
  return fetch(url.href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error();
    })
    .then((data: FileEntry) => {
      return data;
    })
    .catch((_err) => {
      const emptyFile: FileEntry = {
        id: url.searchParams.get(path || defaultPath)?.toString() || "",
        contents: "",
      };
      return emptyFile;
    });
}
