import React, { useState } from 'react';

function Test() {
  const [activeComponent, setActiveComponent] = useState(null);

  const showComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <button onClick={() => showComponent("Component1")}>Show Component 1</button>
      <button onClick={() => showComponent("Component2")}>Show Component 2</button>
      <button onClick={() => showComponent("Component3")}>Show Component 3</button>

      {activeComponent === "Component1" && <Component1 />}
      {activeComponent === "Component2" && <Component2 />}
      {activeComponent === "Component3" && <Component3 />}
    </div>
  );
}

function Component1() {
  return <div>Component 1</div>;
}

function Component2() {
  return <div>Component 2</div>;
}

function Component3() {
  return <div>Component 3</div>;
}

export default Test;
