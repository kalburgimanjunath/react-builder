import React, { useState, useRef } from 'react';
import {
  Label,
  Hero,
  Input,
  PropertyPane,
  CanvasAreaHeader,
  CanvasAreaFooter,
  Tree,
} from './';
export default function CanvasArea({ listcomponents }) {
  // console.log(listcomponents);
  const [selectedComponent, setSelectedComponent] = useState();
  const componentRef = useRef();

  const [textProperty, setTextProperty] = useState(
    selectedComponent ? selectedComponent.title : ''
  );
  function getComponent(type) {
    if (type == 'textbox') {
      return <Input forwardRef={componentRef} text={textProperty} />;
    } else if (type == 'hero') {
      return <Hero forwardRef={componentRef} />;
    } else if (type == 'label') {
      return <Label forwardRef={componentRef} />;
    } else if (type == 'tree') {
      return <Tree />;
    }
  }

  return (
    <div className="overflow-y-auto mt-10">
      <CanvasAreaHeader />
      {listcomponents &&
        listcomponents.length > 0 &&
        listcomponents.map((item) => {
          return (
            <div
              className="selectedcomponent hover:bg-red-200"
              onClick={() => setSelectedComponent(item)}
            >
              {getComponent(item.type)}
            </div>
          );
        })}
      <PropertyPane
        selectedComponent={selectedComponent ? selectedComponent : null}
        forwardRef={componentRef}
        setTextProperty={setTextProperty}
        textProperty={textProperty}
      />
      <CanvasAreaFooter />
    </div>
  );
}
