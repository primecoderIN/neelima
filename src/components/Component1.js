import {useState} from 'react'

const Component1 = ({counter}) => {
    const [data,setData] = useState({
        name: "Sanjeev"
    })
  return (
    <div>From component 1 : {counter}</div>
  )
}

export default Component1