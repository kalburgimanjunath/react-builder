import React, { useState } from 'react';
export default function index({ text }) {
  return (
    <div className="p-2">
      <input type="text" className="bordered border-2 p-2" value={text} />
    </div>
  );
}
