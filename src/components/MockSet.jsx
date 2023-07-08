import MockContents from "./MockContents";
import React from "react";

const MockSet = () => {
  return (
    <>
      <MockContents />
      <MockContents />
      <MockContents />
      <MockContents />
      <MockContents />
      <MockContents />
      <MockContents />
      <MockContents />
      <MockContents />
      <MockContents />
    </>
  );
};

export default React.memo(MockSet);
