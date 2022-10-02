import { useMemo, useState, useRef } from "react";

function App() {

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [products, setProducts] = useState([]);

  const nameInput = useRef();

  const handleAddProduct = () => {
    setProducts([...products, { name, cost }]);
    setName('');
    setCost('');
    nameInput.current.focus();
  }

  const total = useMemo(() => {
    console.log("cal");
    return products.reduce((acc, product) => acc + parseInt(product.cost), 0);
  }, [products]);


  return (
    <div className="App">
      <input ref={nameInput} type="text" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" value={cost} onChange={e => setCost(e.target.value)} />
      <p>Total: {total}</p>
      {
        <>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product.name} - {product.cost}</li>
            ))}
          </ul>
        </>
      }
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default App;


