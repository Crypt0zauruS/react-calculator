import React, { useState, useRef, useEffect } from "react";
import Flipmove from "react-flip-move";

const Roll = ({ listOp, display }) => {
  const listRef = useRef();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    listRef.current.classList.add("hidden");

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const time = windowSize.innerWidth > 770 ? 250 : 25;

    if (display) {
      listRef.current.classList.remove("hidden");
      setTimeout(() => listRef.current.classList.remove("delayWidth"), time);
      setTimeout(
        () => listRef.current.classList.remove("delayOpacity"),
        time * 2
      );
    } else {
      listRef.current.classList.add("delayOpacity");
      setTimeout(() => listRef.current.classList.add("delayWidth"), time);
      setTimeout(() => listRef.current.classList.add("hidden"), time * 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display]);

  const list = listOp.map((item, index) => {
    return (
      <li className="list-group-item" key={index}>
        {item}
      </li>
    );
  });
  return (
    <div ref={listRef} className="roll">
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

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

export default Roll;
