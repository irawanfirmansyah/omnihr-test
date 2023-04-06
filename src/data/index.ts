type FileSystem = {
  id: string;
  entries?: File[];
};

const API_URL = "http://localhost:8080/fs";

const defaultPath = "root";

export function getFiles({ path }: { path?: string } = { path: defaultPath }) {
  const url = new URL(API_URL);
  url.searchParams.append("path", path || defaultPath);

  return fetch(url.href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data: FileSystem) => console.log(data));
}
