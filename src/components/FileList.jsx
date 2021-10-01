import React, { useState, useEffect, useContext, useCallback } from "react";
import { ListContext } from "../providers/ContextProvider";

export const FileList = () => {
  console.log("render-1");
  const { fileList } = useContext(ListContext);
  console.log("fileList:" + fileList);

  return (
    <div>
      <ul>
        {fileList.map((file, index) => {
          return <li key={index}>{file}</li>;
        })}
      </ul>
    </div>
  );
};
