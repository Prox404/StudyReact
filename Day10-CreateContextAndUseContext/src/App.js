import "./App.css";
import  Content  from "./Content";
import { useContext} from 'react';
import { ThemeContext } from "./ThemeContext";

function App() {

  const context = useContext(ThemeContext);

  return (
    <>
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Content />
    </>
  );
}

export default App;


