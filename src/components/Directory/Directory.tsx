import { DirectoryFileItem } from "../DirectoryFileItem";
import { DirectoryContainer } from "../DirectoryContainer";
import { DirectoryIcon } from "../DirectoryIcon";
import { DirectoryTitle } from "../DirectoryTitle";
import { useDirectoryContext } from "@/contexts/DirectoryContext";

function Directory({
  title,
  parentTitle,
}: {
  title: string;
  parentTitle: string | null;
}) {
  const { state, handleClickDirectory } = useDirectoryContext();

  const isRoot = title === "root" && parentTitle === null;

  // Path will be used for API call to query filesystem
  // and get entries from state
  const path = isRoot
    ? "root"
    : parentTitle === "root"
    ? title
    : `${parentTitle}/${title}`;

  const isDirectoryOpen = state.get(path)?.open;

  const renderFileEntries = () => {
    const directoryState = state.get(path);

    if (directoryState !== undefined) {
      if (directoryState.open) {
        if (directoryState.entries.length <= 0) {
          return <p>... Empty Folder ...</p>;
        }
        return directoryState.entries.map((v) => {
          if (v.type === "file") {
            return (
              <DirectoryFileItem key={v.name} id={v.name} dirPath={path}>
                {v.name}
              </DirectoryFileItem>
            );
          }
          return <Directory key={v.name} title={v.name} parentTitle={path} />;
        });
      }
    }
    return null;
  };

  return (
    <DirectoryContainer>
      <DirectoryIcon
        // Root is open by default
        expanded={isDirectoryOpen}
        onClick={() => handleClickDirectory(path)}
      />
      <div>
        <DirectoryTitle>{title}</DirectoryTitle>
        {isDirectoryOpen ? renderFileEntries() : null}
      </div>
    </DirectoryContainer>
  );
}

export default Directory;
