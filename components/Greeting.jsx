const Greeting = () => {
    let msg = "Hello msgg"
    let para = "Today is sept 4"
    let name = "John"
    const date = new Date()

  return (
    <div>
      <h1>mag: {msg}</h1>
      <p>para: {para}</p>
      <p>name: {name}</p>
      <p>Dateee: {date.getDate()}</p>
    </div>
  )
}

export default Greeting
