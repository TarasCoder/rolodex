import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  let filtered = data.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase());
  });

  const search = (ev) => {
    setInput(ev.target.value);
  };

  return (
    <div className="App">
      <input type="search" placeholder="Enter name:" onChange={search} />
      {filtered.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
