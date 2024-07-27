import React, { useState, useCallback } from "react";
import DragItem from "./DragItem";

const Grid = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Box 1" },
    { id: 2, text: "Box 2" },
    { id: 3, text: "Box 3" },
    { id: 4, text: "Box 4" },
    { id: 5, text: "Box 5" },
  ]);

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = items[dragIndex];
      const newItems = [...items];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, dragItem);
      setItems(newItems);
    },
    [items]
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "10px",
      }}
    >
      {items.map((item, index) => (
        <DragItem
          key={item.id}
          index={index}
          id={item.id}
          text={item.text}
          moveItem={moveItem}
        />
      ))}
    </div>
  );
};

export default Grid;
