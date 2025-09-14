const ProductList = () => {

    const products = [ 
        {
            id: 1,
            name: "phone",
            price: 699
        },
        {
            id: 2,
            name: "Laptop",
            price: 6999
        },
        {
            id: 3,
            name: "Headphone",
            price: 6992
        },
    ];
  return (
    <div>
      {products.map((product) =>(
        <ul key={product.id}>
            <li>{product.id}</li>
            <li>{product.name}</li>
            <li>{product.price}</li>
        </ul>
      ))}
    </div>
  )
}

export default ProductList
