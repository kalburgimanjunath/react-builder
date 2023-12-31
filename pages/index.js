import styles from '../styles/Home.module.css';
import { Sidebar, CanvasArea } from '../components/';
import { useState, useEffect } from 'react';
import React from 'react';
import { ALLCOMPONENTS } from './api/allcomponents';
export default function Home() {
  const InitialValue = [
    {
      id: 0,
      title: 'Label',
    },
  ];
  const [newcomponents, setComponents] = useState(InitialValue);

  useEffect(() => {});
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 bg-gray-200 w-full">
      <Sidebar items={ALLCOMPONENTS} selectedComponent={setComponents} />
      <CanvasArea listcomponents={newcomponents} />
    </div>
  );
}
