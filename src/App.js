import {Navbar} from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import './App.css';

//Rules of react and hooks 

//Component name will start with capital letter only 

//We can not return multiple elements from a react component

//Hooks can be called only inside a functional component and that too before return

//You can not import something which does not exists in your project

//In react we do not use class we use className instead 

//we do not use for in react we use htmlFor instead on label element

function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
