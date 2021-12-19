import React from "react";

const style = {
  background: "#17183b",
  border: "2px solid #c2e812",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  color: "#fff7f8",
};

const Square = ({ onClick, value }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);
export default Square;
