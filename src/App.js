import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  //UseEffects unmounts itself first then mount itself again when any dependency changes

  useEffect(() => {
    //The callback which we pass to useEffect is executed whenever
    //component mounts or any dependency changes
    document.title = `${count} Messages`;

    console.log("Updated count", count);
    //Wr iting clean up function

    //This piece of code will be executed when useEffect unmounts/ or component unmounts
    return () => {
      console.log("I will be called when component unmounts");
      console.log("Old count", count);
    };
  }, [count]);

  const makeApiCall = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
  };

  useEffect(() => {
    let timeout;
    //Set interval returns an id which we are storing in timeout variable
    //Which will be used to clear the setInterval
    timeout = setInterval(makeApiCall, 3000);

    //Before adding new setInterval we are clearing the previous setInterval added to browser
    return () => clearInterval(timeout);
  }, [count]);

  useEffect(() => {
    //We are attaching a click event listener to browser
    //This listener will execute the callback each time user clicks on document
    document.addEventListener("click", makeApiCall);

    //We do not want duplicate event listeners so we are cleaning old event listenr
    //Before adding new
    return () => document.removeEventListener("click", makeApiCall);
  }, [count]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
