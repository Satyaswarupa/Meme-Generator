import React, { useState } from "react";
import Draggable from "react-draggable";
import "../styles/text.scss";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Tap and hold to Edit");

  const handleLongPress = () => {
    setEditMode(true);
  };

  const handleSingleTouch = () => {
    if (!editMode) {
      // Only toggle edit mode if not already in edit mode
      setEditMode(!editMode);
    }
  };

  return (
    <Draggable>
      {editMode ? (
        <input
          onBlur={(e) => setEditMode(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h1
          className="text"
          onTouchStart={handleLongPress}
          onTouchEnd={handleSingleTouch} // Use onTouchEnd for single touch
        >
          {value}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;
