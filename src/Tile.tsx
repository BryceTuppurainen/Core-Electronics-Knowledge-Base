import React from "react";

type propType = {
  title: string;
  resultId: string;
  tags: string;
  children: JSX.Element[] | String;
};

const Tile = (props: propType) => {
  return (
    <div className="tile">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default Tile;
