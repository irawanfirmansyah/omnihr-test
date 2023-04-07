import Head from "next/head";
import { withDirectoryContext } from "@/hocs/withFileSystemContext";
import { Directory } from "@/components";

function Home() {
  return (
    <>
      <Head>
        <title>Component File Browser</title>
      </Head>
      <main style={{ padding: "48px" }}>
        <h1 style={{ marginBottom: "20px" }}>Component Directory</h1>
        <Directory title="root" parentTitle={null} />
      </main>
    </>
  );
}

export default withDirectoryContext(Home);
