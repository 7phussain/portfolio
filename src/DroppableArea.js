import React from "react";
import { useDrop } from "react-dnd";

const DroppableArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: "12rem",
        width: "12rem",
        border: "1px solid black",
        backgroundColor: isOver ? "lightblue" : "white",
      }}
    >
      Drop here
    </div>
  );
};

export default DroppableArea;
