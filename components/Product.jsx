import React from 'react'

const Product = () => {
  return (
    <Pro
    name = "Phone"
    price = {3456}
    />
  )
};

// const Pro = (props) =>{
//     return (
//         <div>
//             <h3>Name: {props.name} </h3>
//             <h4>Price: {props.price} </h4>
//         </div>
//     )
// }

//destructing
const Pro = ({name, age}) =>{
    return(
        <div>
            <h3> Name: {name} </h3>
            <h3> Price: {price} </h3>
        </div>
    )
}

export default Product;
