import {useState} from "react"



const Sidebar = ()=> {
    const [state, setState] = useState(null);
    return (
      <>
        <h1>Count :  {state && state}</h1>
        <h1>sidebar2</h1>
      </>
    );
}

export default Sidebar;