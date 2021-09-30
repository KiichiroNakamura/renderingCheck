import React, { useState, useContext, useCallback } from "react";
import { ListContext } from "../providers/ContextProvider";

export const FileList = () => {
  console.log("render-1");
  const { fileList, setFileList } = useContext(ListContext);
  const [files, setFiles] = useState(fileList);
  console.log("fileList:" + fileList);
  const [addFile, setAddFile] = useState("");
  const onChangeAddFile = (e) => {
    console.log("render2");
    setAddFile(e.target.value);
  };

  const onClickAddFile = useCallback(() => {
    if (addFile === "") return;
    console.log("render3");
    // alert(addFile);
    const newList = [...fileList, addFile];
    setFiles(newList);
    setFileList(newList);
    setAddFile("");
  });

  return (
    <div>
      <input text="text" value={addFile} onChange={onChangeAddFile} />
      <button onClick={onClickAddFile}>add</button>
      <ul>
        {files.map((file, index) => {
          return <li key={index}>{file}</li>;
        })}
      </ul>
    </div>
  );
};
