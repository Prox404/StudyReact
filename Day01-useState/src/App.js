import { useState } from "react";

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('list');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddEvent = () => {
    setList(prev => {
      const newList = [...prev, text];
      localStorage.setItem('list', JSON.stringify(newList));
      return newList;
    });
    console.log(text);
    setText("");
  }


  const handleRemove = (its) => {
    if (list.includes(its)) {
      setList(() => {
        const newList = list.filter((item) => item !== its);
        localStorage.setItem('list', JSON.stringify(newList));
        return newList;
      });
    } else {
      console.log("not found");
    }
  }

  return (
    <div className="App">
        <div>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleRemove(item)}>Remove</button> 
              </li>
            ))}
          </ul>
        </div>
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
}

export default App;


