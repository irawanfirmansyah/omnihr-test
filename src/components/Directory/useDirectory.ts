import { getDirectoryEntries } from "@/data";
import { useEffect, useReducer, useState } from "react";

type UseDirectoryReducerType = {
  loading: boolean;
  directoryEntries: any[];
};

type UseDirectoryAction =
  | {
      type: "SET_LOADING";
      payload: boolean;
    }
  | {
      type: "SET_DIR_ENTRIES";
      payload: any[];
    }
  | {
      type: "SET_STATE";
      payload: UseDirectoryReducerType;
    };

const useDirectoryReducer = (
  state: UseDirectoryReducerType,
  action: UseDirectoryAction
): UseDirectoryReducerType => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_DIR_ENTRIES":
      return {
        ...state,
        directoryEntries: action.payload,
      };

    case "SET_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return { ...state };
    }
  }
};

export function useDirectory(id: string, initialExpanded?: boolean) {
  const [expanded, setExpanded] = useState<boolean>(Boolean(initialExpanded));

  const [state, dispatch] = useReducer(useDirectoryReducer, {
    loading: false,
    directoryEntries: [],
  });

  const [data, setData] = useState({
    loading: false,
    directoryEntries: [],
  });

  const initData = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    const res = await getDirectoryEntries({ path: id });
    console.log({ res });
    dispatch({ type: "SET_LOADING", payload: false });
  };

  return { expanded, setExpanded, initData, data: state };
}
