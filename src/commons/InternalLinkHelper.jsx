import React from "react";

// For it to work, parent element of this component must be relative-positioned.
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
