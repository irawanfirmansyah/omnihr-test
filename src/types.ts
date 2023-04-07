export type Directory = {
  id: string;
  entries: DirectoryEntry[];
};

export type DirectoryEntry = {
  name: string;
  type: "directory" | "file";
};

export type FileEntry = {
  id: string;
  contents: string;
};
