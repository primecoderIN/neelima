import {useEffect,useState} from  "react"


function App() {

  const [count,setCount] = useState(0)
  const [counter,setCounter] = useState(0)

//useEffect is used to do side effects in react 
// Anything happens outside of a component is side effect
//Example of side effects are 1. Accessing data from local storage 2. Fetching data from server using api

//like useState and other hook  useEffect is also a hook(function)
//It accepts two paramnters 
//first parameter is mandatory which is a function
//second parameter is optional 

useEffect(()=> {
  //This block of code will run on each re-render or on intial render 
  //If any state changes in the component then it will trigger this useEffect
  console.log("First useEffect")
})

useEffect(() => {
  //This block of code will run only once on initial mount of component
  console.log("Second useEffect")
},[]);


useEffect(() => {
  //This useEffect will execute the code on intial render of component and also when count changes 
  console.log("Third useEffect")
  document.title = `${count} Messages`
}, [count]);
  return (
    <div className="App">
      <h1>Count 1: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br></br>
      <h1>Count 2: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export default App;
