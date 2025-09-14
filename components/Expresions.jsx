// always wrap in curly braces {} to get the ans or value

const Expresions = () => {
    const name = "Navya P"

    const sum = (a, b) => a+b

    const specialClass = "my-class"
  return (
    <div>
      <p> 2*3 = {2*3}</p>
      <p>Name : {name}</p>
      <p>My fav list : {["Microsoft, ", "Google, ", "Netflix"]}</p>
      <p> 2+3 = {sum(2,3)}</p>
      <p className="specialClass">This is spcl my class</p>
    </div>
  )
}

export default Expresions
