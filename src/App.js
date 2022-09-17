import {Navbar,Navbar2} from "./components/Navbar"
//When we do named export we have to import like this in line number 1
//And we can not change the name

import Sanjeev from "./components/Footer"

import './App.css';

//Only one default exports can be made from one file and we can change the name of component
//while import it

//But in case of named export we have to import using curly brackets and wen can not change the name


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Navbar2/>
       <Sanjeev/>
    </div>
  );
}

export default App;
