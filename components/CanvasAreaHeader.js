import React, { useState } from 'react';
export default function CanvasAreaHeader() {
  const drawingHeader = [
    {
      id: 1,
      title: 'Drawer',
    },
    {
      id: 2,
      title: 'Preview',
    },
    {
      id: 3,
      title: 'Mobile View',
    },
  ];
  return (
    <div className="bg-white shadow-md flex justify-between w-full fixed top-0">
      <div className="flex">
        {drawingHeader &&
          drawingHeader.map((item) => {
            return (
              <div className="p-3 hover:bg-gray-100 cursor-pointer">
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
}
