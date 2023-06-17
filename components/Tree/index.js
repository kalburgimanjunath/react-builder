import React, { useState } from 'react';
export default function index({ items }) {
  const treeitems = [
    {
      id: 1,
      title: 'tree',
      subitems: [
        { id: 1, title: 'tree' },
        { id: 2, title: 'tree' },
        { id: 3, title: 'tree' },
        { id: 4, title: 'tree' },
        { id: 5, title: 'tree' },
        { id: 6, title: 'tree' },
        { id: 7, title: 'tree' },
      ],
    },
    {
      id: 2,
      title: 'tree',
      subitems: [
        { id: 1, title: 'tree' },
        { id: 2, title: 'tree' },
        { id: 3, title: 'tree' },
        { id: 4, title: 'tree' },
        { id: 5, title: 'tree' },
        { id: 6, title: 'tree' },
        { id: 7, title: 'tree' },
      ],
    },
    {
      id: 3,
      title: 'tree',
      subitems: [
        { id: 1, title: 'tree' },
        { id: 2, title: 'tree' },
        { id: 3, title: 'tree' },
        { id: 4, title: 'tree' },
        { id: 5, title: 'tree' },
        { id: 6, title: 'tree' },
        { id: 7, title: 'tree' },
      ],
    },
    {
      id: 4,
      title: 'tree',
      subitems: [
        { id: 1, title: 'tree' },
        { id: 2, title: 'tree' },
        { id: 3, title: 'tree' },
        { id: 4, title: 'tree' },
        { id: 5, title: 'tree' },
        { id: 6, title: 'tree' },
        { id: 7, title: 'tree' },
      ],
    },
    {
      id: 5,
      title: 'tree',
      subitems: [
        { id: 1, title: 'tree' },
        { id: 2, title: 'tree' },
        { id: 3, title: 'tree' },
        { id: 4, title: 'tree' },
        { id: 5, title: 'tree' },
        { id: 6, title: 'tree' },
        { id: 7, title: 'tree' },
      ],
    },
    {
      id: 6,
      title: 'tree',
      subitems: [
        { id: 1, title: 'tree' },
        { id: 2, title: 'tree' },
        { id: 3, title: 'tree' },
        { id: 4, title: 'tree' },
        { id: 5, title: 'tree' },
        { id: 6, title: 'tree' },
        { id: 7, title: 'tree' },
      ],
    },
    {
      id: 7,
      title: 'tree',
      subitems: [
        { id: 1, title: 'tree' },
        { id: 2, title: 'tree' },
        { id: 3, title: 'tree' },
        { id: 4, title: 'tree' },
        { id: 5, title: 'tree' },
        { id: 6, title: 'tree' },
        { id: 7, title: 'tree' },
      ],
    },
  ];
  return (
    <div className="tree bg-white p-2 m-1">
      {treeitems &&
        treeitems.map((item) => {
          return (
            <>
              <div className="p-2 hover:bg-gray-100 border-b-2 cursor-pointer">
                {item.title + item.id}
              </div>
              <div className="">
                {item.subitems &&
                  item.subitems.map((subitemloop) => {
                    return (
                      <div className="pl-5 p-2 hover:bg-gray-100  border-b-2 cursor-pointer">
                        {subitemloop.title + subitemloop.id}
                      </div>
                    );
                  })}
              </div>
            </>
          );
        })}
    </div>
  );
}
