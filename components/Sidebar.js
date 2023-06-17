import React, { useState } from 'react';

export default function Sidebar({ items, selectedComponent }) {
  // const [selectedComponent, setComponent] = useState();
  return (
    <div className="shadow-lg bg-white">
      <h3 className="font-bold text-lg">List of components</h3>
      <div className="">
        {items &&
          items.length > 0 &&
          items.map((item) => {
            return (
              <div
                onClick={(e) => {
                  // setComponent(e.target.value);
                  selectedComponent((previous, current) => {
                    return [...previous, item];
                  });
                }}
                value={item.title}
                className="p-2 hover:bg-pink-100 cursor-pointer"
              >
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
}
