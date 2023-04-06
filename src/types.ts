export type FileSystemDirectory = {
  id: string;
  entries: FileSystemEntry[];
};

export type FileSystemEntry = {
  name: string;
  type: "directory" | "file";
};

export type FileSystemContent = {
  id: string;
  contents: string;
};
