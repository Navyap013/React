import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const Increment = () =>{
        setCount(count+1);
    }
  return (
    <div>
        <p>{count} </p>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Counter
