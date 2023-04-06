import { FileSystemDirectory, FileSystemContent } from "@/types";

const API_URL = "http://localhost:8080/";

const ENDPOINTS = {
  fileSystem: "fs",
} as const;

const defaultPath = "root";

export function getDirectoryEntries(
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
    .then((data: FileSystemDirectory) => {
      return data;
    })
    .catch((_err) => {
      const emptyDir: FileSystemDirectory = {
        id: url.searchParams.get(path || defaultPath)?.toString() || "",
        entries: [],
      };
      return emptyDir;
    });
}

export function getFileContent(path: string): Promise<FileSystemContent> {
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
    .then((data: FileSystemContent) => {
      return data;
    })
    .catch((_err) => {
      const emptyFile: FileSystemContent = {
        id: url.searchParams.get(path || defaultPath)?.toString() || "",
        contents: "",
      };
      return emptyFile;
    });
}
