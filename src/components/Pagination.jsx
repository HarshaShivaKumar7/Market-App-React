import React from "react";
import "./MarketData.css";
const Pagination = ({ onNext, onPrev }) => {
  return (
    <div>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Pagination;
