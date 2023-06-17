import React, { useState, useRef } from 'react';
export default function index({
  selectedComponent,
  forwardRef,
  setTextProperty,
  textProperty,
}) {
  // const [textProperty, setTextProperty] = useState(
  //   selectedComponent ? selectedComponent.title : ''
  // );
  return (
    <div className="bg-white fixed top-0 bottom-0 right-0 p-4 shadow-lg">
      <h3 className="font-bold">Property Pane</h3>
      {/* <div className="p-2">{selectedComponent.id}</div> */}
      <div className="p-2">
        Text:
        <input
          type="text"
          className="bordered border-2 p-2"
          value={selectedComponent ? selectedComponent.title : ''}
          // value={textProperty}
          onChange={(e) => setTextProperty(e.target.value)}
        />
      </div>
    </div>
  );
}
