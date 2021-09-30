import React, { createContext, useState } from "react";
export const ListContext = createContext();
//export const VideoContext = createContext();

export const ListProvider = ({ children }) => {
  // const [fileList, setFileList] = useState([]);
  const [fileList, setFileList] = useState(["aaaa", "bbb", "cccc"]);

  return (
    <ListContext.Provider value={{ fileList, setFileList }}>
      {children}
    </ListContext.Provider>
  );
};
