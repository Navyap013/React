
const Weather = () => {
  let temp = 34;

  if(temp < 15){
    return <p>It is cold</p>
  }
  else if(temp >= 15 && temp <= 25){
    return <p>It is good weather</p>  
    }
    return <p>It is hot</p>
}

export default Weather;
