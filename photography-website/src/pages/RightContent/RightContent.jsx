import React, { useState } from "react";
import "./RightContent.scss";

const RightContent = () => {
  const [count, setCount] = useState(0);
  const [scroll, setScroll] = useState([0]);

  const time = setTimeout(() => {
    setScroll([...scroll, count + 1]);
    setCount(count + 1);
    console.log(scroll);
  }, 10);

  if (scroll.length > 500) {
    clearTimeout(time);
  }

  return (
    <div className="rightContent">
      <div className="container">
        {scroll.map((value, index) => (
          <div className="post" key={index}>
            <img src={`https://picsum.photos/600/500?random=${index}`} alt="" />
            <span>Desciption</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightContent;
