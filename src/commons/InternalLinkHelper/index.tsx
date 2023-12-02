import React, { FC } from "react";

type Props = {
  id: string;
  elementHeight: number | null | undefined;
};

const InternalLinkHelper: FC<Props> = ({ id, elementHeight }) => {
  const style = {
    position: "absolute",
    top: `-${elementHeight}px`,
  } as const;

  return (
    <div className="anchor-internal-link-helper" style={style} id={id}></div>
  );
};

export default InternalLinkHelper;
