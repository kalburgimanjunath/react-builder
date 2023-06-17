import React, { useState } from 'react';
export default function CanvasAreaHeader({ setViewType }) {
  const drawingHeader = [
    {
      id: 1,
      title: 'Drawer',
      type: 'drawer',
    },
    {
      id: 2,
      title: 'Preview',
      type: 'preview',
    },
    {
      id: 3,
      title: 'Mobile View',
      type: 'mobile',
    },
  ];
  // const [viewType, setViewType] = useState(drawingHeader[0].type);
  return (
    <div className="bg-white shadow-md flex justify-between w-full fixed top-0">
      <div className="flex">
        {drawingHeader &&
          drawingHeader.map((item) => {
            return (
              <div
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => setViewType(item.type)}
              >
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
}
