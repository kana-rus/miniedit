import { invoke } from "@tauri-apps/api";
import { readDir, BaseDirectory } from "@tauri-apps/api/fs";

import { Editor } from "../components/Editor";
import { DirBox, FileColumn } from "../components/FileTree";


const MiniEdit = () => {
  return (
    <div>
      <DirBox
        name="sampleDir"
        isOpen={true}
        childItems={[
          <FileColumn name="file1" key={"file1"}/>,
          <FileColumn name="file2" key={"file2"}/>,
          <FileColumn name="file3" key={"file3"}/>,
        ]}
      />
    </div>
  )
};


export default MiniEdit;