import {React,useState} from "react";
import {Child,MouseTracker,CallBackFun} from "./Child";

function basics() {
  let foodItems = ["a", "b", "c", "d", "e"];
  const [count, setCount] = useState(0);
  const getDataFromChild =(data) =>{
      console.log("Data from child:", data);
  }

  return (
    <div>
      {/* Map */}
      {/* <h1>Food Items</h1>
      <ul>
        {foodItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}

      {/* UseState */}
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}

      {/* props */}
      <Child name="Jay" />

      {/* render propes */}
      <MouseTracker render={(x) => <h1>Mouse X Position: {x}</h1>}/>
      
      {/* CallbackFunction */} 
      <CallBackFun data={getDataFromChild} />
         
    </div>
  );
}

export default basics;
