import React, { useState } from "react";
import Draggable from "react-draggable";
import "../styles/text.scss";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Tap and hold to Edit"); // Update initial text

  const handleLongPress = () => {
    setEditMode(true);
  };

  return (
    <Draggable>
      {editMode ? (
        <input
          onBlur={(e) => setEditMode(false)} // Use onBlur to exit edit mode on mobile
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h1
          className="text"
          onTouchStart={handleLongPress} // Use onTouchStart for tap-and-hold gesture
        >
          {value}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;

