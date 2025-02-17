const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

function App(){
  return (
    <>
      <h1 className="gallery-title">Tshirts</h1>
      <Gallery items={tshirts}  />
    </>
  )
}

function Gallery ({items}) {
  const [tshirts, setTshirts] = React.useState(items);

  const buyHandler = (quantity) => {
    setTshirts ((prevState) => prevState.map(tshirt => tshirt.stock >= quantity ? { ...tshirt, stock: tshirt.stock - quantity} : tshirt))}

  const stockHandler = (e) => {
    e.preventDefault()
    buyHandler(stock)
  }

  return (
    <div id="gallery" className="gallery">
      {tshirts.map( tshirt => 
        <div key={tshirt.index}  
              className="gallery-item" >
          <img className="gallery-item-image" src={`./images/${tshirt.image}`} alt={tshirt.title} />
          <h2 className="gallery-item-name">{tshirt.title}</h2>
          <strong>${tshirt.price}</strong>
          {tshirt.stock >0 ?  <p>{tshirt.stock} left!</p>: <p>Out of Stock!</p>}
          <form className="selectForm" onSubmit={stockHandler} >
            <input type="number" className="form-control" placeholder="0"  min="1" max={tshirt.stock} />
            <button type="submit" className="btn">Buy</button>
          </form>
        </div>
        )}
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)