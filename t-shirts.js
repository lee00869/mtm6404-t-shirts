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
      <h1 className="gallery-title">Tshirt On Sale</h1>
      <Gallery items={tshirts}  />
    </>
  )

}

console.log("JS file is linked!");


function Gallery (props) {
  const [items, setItems] = React.useState(props.items)

  // function clickHandler (target) { 
  //   setItems( items.map(item => item.id === target.id ? {...item, caught: !item.caught} : item ) )
    
  // }

  return (
    <div id="gallery" className="gallery">
      {tshirts.map( tshirt => 
        <div key={tshirt.id} 
              className={tshirt.caught ? "gallery-item caught" : "gallery-item"} >
          <img className="gallery-item-image" src={`tshirt.image`} alt={tshirt.title} />
          <h2 className="gallery-item-name">{tshirt.title}</h2>
          <p>{tshirt.price}</p>
          <p>{tshirt.stock}</p>
          <p>{tshirt.quantity}</p>
        </div>
        )}
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)