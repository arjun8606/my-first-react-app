function ProductCard({ name, price, inStock }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>

      {inStock ? (
        <button onClick={() => alert(name + " added successfully")}>
          Add to Cart
        </button>
      ) : (
        <p style={{ color: "red" }}>Out of stock</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Product List</h1>

      <ProductCard name="Laptop" price={50000} inStock={true} />
      <ProductCard name="Phone" price={20000} inStock={false} />
      <ProductCard name="Headphones" price={2000} inStock={true} />
      <ProductCard name="Keyboard" price={1500} inStock={true} />
    </div>
  );
}

export default App;
