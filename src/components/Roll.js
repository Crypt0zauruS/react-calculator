import React from "react";
import Flipmove from "react-flip-move";

const Roll = ({ props }) => {
  const list = props.map((item, index) => {
    return (
      <li className="list-group-item" key={index}>
        {item}
      </li>
    );
  });
  return (
    <div className="roll">
      <ul className="list-group">
        <Flipmove>
          <li id="list-title" className="list-group-item rounded-top">
            ♾ Op3rAti0ns 📝
          </li>
          {list}
        </Flipmove>
      </ul>
    </div>
  );
};

export default Roll;
