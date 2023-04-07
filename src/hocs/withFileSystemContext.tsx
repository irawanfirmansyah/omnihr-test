import { DirectoryContextProvider } from "@/contexts/DirectoryContext";
import type { ComponentType } from "react";

export function withDirectoryContext<P extends object>(
  Component: ComponentType<P>
) {
  return function WrappedComponent(props: P) {
    return (
      <DirectoryContextProvider>
        <Component {...props} />
      </DirectoryContextProvider>
    );
  };
}
