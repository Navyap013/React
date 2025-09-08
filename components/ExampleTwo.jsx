import { useState } from "react"

const ExampleTwo = () => {

    const[randomNumber, setRandomNumber] = useState(() =>
        Math.floor(Math.random() * 50)
    );

    const RandomNum = () => {
        setRandomNumber(Math.floor(Math.random() * 50))
    }

  return (
    <div>
      <h1>Random Number:{randomNumber} </h1>
      <button onClick={RandomNum}>Click here for Rand Num</button>
    </div>
  )
}

export default ExampleTwo
