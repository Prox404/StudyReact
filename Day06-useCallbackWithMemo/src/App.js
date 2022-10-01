import { useCallback,useState } from "react";
import Content from "./Content";

function App() {
  const [show, setShow] = useState(false);

  const [count, setCount] = useState(0);

  const onCountChange = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  console.log("Parent render");



  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <h1>{count}</h1>}
      {show && <Content onCountChange={onCountChange} />}
    </div>
  );
}

export default App;


