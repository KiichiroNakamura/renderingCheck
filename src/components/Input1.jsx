import React, { useState, useEffect, useContext, useMemo } from "react";
import { ListContext } from "../providers/ContextProvider";

export const Input1 = () => {
  console.log("render-Input1");
  const [addFile, setAddFile] = useState("");
  const { fileList, setFileList } = useContext(ListContext);

  const onChangeAddFile = (e) => {
    setAddFile(e.target.value);
  };
  const onClickAddFile = () => {
    console.log("render-Input1-onClickAddFile:" + addFile);

    if (addFile === "") return;
    console.log("render-Input1-onClickAddFile addFile:" + addFile);
    const newList = [...fileList, addFile];
    setFileList(newList);
    console.log("render-Input1-onClickAddFile newList:" + newList);
    console.log("render-Input1-onClickAddFile fileList:" + fileList);
    setAddFile("");
  };

  return (
    <div>
      <input text="text" value={addFile} onChange={onChangeAddFile} />
      <button onClick={onClickAddFile}>add</button>
      {/* <ul>
        {files.map((f, i) => {
          return <li key={i}>{f}</li>;
        })}
      </ul> */}
    </div>
  );
};
