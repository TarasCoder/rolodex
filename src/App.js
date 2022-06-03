import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const search = (ev) => {
    console.log(ev.target.value);
  };

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data);
    });

  return (
    <div className="App">
      <input type="search" placeholder="Enter name:" onChange={search} />
      {data.map((item) => {
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
