import React, { useState } from "react";
import Draggable from "react-draggable";
import "../styles/text.scss"

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Double Click to Edit");

  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={(e) => setEditMode(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h1 className="text" onDoubleClick={(e) => setEditMode(true)}>{value}</h1>
      )}
    </Draggable>
  );
};

export default Text;
