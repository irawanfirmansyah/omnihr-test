import { getDirectory } from "@/data";
import { DirectoryEntry } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export type DirectoryState = Map<
  string,
  { open: boolean; entries: DirectoryEntry[] }
>;

export const DirectoryContext = createContext<{
  state: DirectoryState;
  setState: Dispatch<SetStateAction<DirectoryState>>;
}>({
  state: new Map(),
  setState: () => {},
});

export const DirectoryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState<DirectoryState>(new Map());

  useEffect(() => {
    getDirectory({ path: "root" }).then((v) => {
      const map: DirectoryState = new Map();
      map.set(v.id, { open: true, entries: v.entries });
      setState(map);
    });
  }, []);

  return (
    <DirectoryContext.Provider value={{ state, setState }}>
      {children}
    </DirectoryContext.Provider>
  );
};

export const useDirectoryContext = () => {
  const { state, setState } = useContext(DirectoryContext);

  const handleClickDirectory = async (path: string) => {
    const result = await getDirectory({ path });

    const newMap = new Map(state);
    const dirState = newMap.get(path);
    if (dirState !== undefined) {
      newMap.set(path, {
        ...dirState,
        open: !dirState.open,
        entries: result.entries,
      });
    } else {
      newMap.set(path, {
        open: true,
        entries: result.entries,
      });
    }
    setState(newMap);
  };

  return { state, setState, handleClickDirectory };
};
