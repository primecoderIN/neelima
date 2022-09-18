
import './App.css';
import {useState} from "react";
import Component1 from './components/Component1';
import Compoent2 from './components/Compoent2';

//State

//State is nothing a but variable to store data and preserve it during re-renders
//A component can be stateful or stateless 

//Prop 

//Prop is an object which is shared between all the components of a component tree
//Props are like transporter, it is used to pass data from one component to another component

//Hooks

//Hooks are nothing but function 

function App() {
  const [counter, setCounter] = useState(0);

  //useState is also a function
  //usestate adds a local state to a component
  //When we call it, it returns us an array of two items
  //When we call it, we may pass initial state also
  //first item is the state
  //second item is the function to update it
  //Counter is local to App.js and can not be used outside of app.js




  //Lifecycle 

  //Mounting,unmounting and updation of a component is lifecyle 


  //The code we write to be executed at this points are called lifecyle methods 



  return (
    <div className="App">
      <Component1 counter={counter} />
      <Compoent2 counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export default App;
