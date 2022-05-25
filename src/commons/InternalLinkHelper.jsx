import React from "react";

const InternalLinkHelper = ({ id, elementHeight }) => {
  const style = {
    position: "absolute",
    top: `-${elementHeight}px`,
  };

  return (
    <div className="anchor-internal-link-helper" style={style} id={id}></div>
  );
};

export default InternalLinkHelper;
