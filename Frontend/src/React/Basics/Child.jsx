import {React,useState} from 'react'

export function Child(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  )
}
// function passing as props
export function MouseTracker({ render }) {
  const [x, setX] = useState(0);

  return (
    <div onMouseMove={(e) => setX(e.clientX)}>
      {render(x)}
    </div>
  );
}

// callback functions
export function CallBackFun({ data }) {
  return (
    <button onClick={() => data("Hello Parent!")}>
      Send Data
    </button>
    
  );
}