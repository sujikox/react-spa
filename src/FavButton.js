import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleCount = (num) => {
    setCount((currentCount) => {
      return currentCount + num;
    });
  };
  return (
    <div>
      <div>
        <Button variant="outline-info" onClick={() => handleCount(+1)}>
          <FavoriteIcon></FavoriteIcon>
          {count}
        </Button>
      </div>
    </div>
  );
};
export default Count;
