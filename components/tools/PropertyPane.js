import React, { useState } from 'react';
export default function index({
  selectedComponent,
  forwardRef,
  setTextProperty,
  textProperty,
}) {
  // const [textProperty, setTextProperty] = useState(
  //   selectedComponent ? selectedComponent.title : ''
  // );
  const [hidepanel, setTogglePane] = useState(true);
  return (
    <>
      <button
        className="bg-green-100 p-2 cursor-pointer fixed right-0 top-0"
        onClick={() => {
          console.log(!hidepanel);
          setTogglePane(!hidepanel);
        }}
      >
        Show
      </button>
      <div
        className={
          hidepanel
            ? `bg-white fixed top-0 bottom-0 right-0 p-4 shadow-lg`
            : 'hidden'
        }
      >
        <h3 className="font-bold flex justify-between">
          <span>Property Pane {hidepanel}</span>
        </h3>
        <button
          className="bg-green-100 p-2 cursor-pointer fixed right-0 top-0"
          onClick={() => {
            console.log(!hidepanel);
            setTogglePane(!hidepanel);
          }}
        >
          Hide
        </button>
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
    </>
  );
}
