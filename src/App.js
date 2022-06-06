import "./App.css";
import { useState, useEffect } from "react";
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'

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
      <SearchBox placeholder="Enter name..." onSearch={search} />
      <CardList filtered={filtered} />
    </div>
  );
}

export default App;
