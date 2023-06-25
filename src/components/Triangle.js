import React, { useEffect, useState } from "react";

const Triangle = ({ img, setRotate }) => {
  const [position, setPosition] = useState(0);

  let styles = {
    transform: `rotate(${position}deg)`,
  };

  useEffect(() => {
    setRotate();
  }, [position]);

  return (
    <div className="triangle">
      <img
        src={img}
        alt=""
        onClick={() => setPosition(position + 90)}
        style={styles}
      />
    </div>
  );
};

export default Triangle;
