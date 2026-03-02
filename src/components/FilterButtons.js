import React from "react";

function FilterButtons({ onAll, onPending, onCompleted }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={onAll}>All</button>
      <button onClick={onPending}>Pending</button>
      <button onClick={onCompleted}>Completed</button>
    </div>
  );
}

export default FilterButtons;