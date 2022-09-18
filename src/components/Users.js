import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Users = () => {
  const [data, setData] = useState([]);


  //This is making api call using async await 
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if(response.status===200){
        setData(response.data)
    }
  }

    useEffect(() => {
     getData()
    }, []);


    //Making request using promises
    
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);
  return (
    <>
    {data.map((user,index)=> {
        // console.log("from users",user)
        return <Card user={user} key={index}/>
    })}
    </>
  );
};

export default Users;
