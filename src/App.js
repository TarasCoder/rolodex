import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [mainData, setMainData] = useState([]);
  const [input, setInput] = useState("");
  const [numberOfUsers, setNumberOfUsers] = useState(9);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${numberOfUsers}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMainData(data.results);
      });
  }, [numberOfUsers]);

  let filtered = mainData.filter((item) => {
    return (
      item.name.last.toLowerCase().includes(input.toLowerCase()) ||
      item.name.first.toLowerCase().includes(input.toLowerCase())
    );
  });

  const search = (ev) => {
    setInput(ev.target.value);
  };

  const setUsers = (ev) => {
    setNumberOfUsers(ev.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">User's Rolodex</h1>
      <SearchBox placeholder="Filter by name..." type="search" onSearch={search} />
      <SearchBox placeholder="Number of displayed users" type="number" onSearch={setUsers} />
      <CardList filtered={filtered} />
    </div>
  );
}

export default App;
