import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/cardList/cardList.component";
import SearchBox from "./components/searchBox/searchBox.component";

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => (response = response.json()))
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(()=> {
    setFilteredMonsters(monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString),
    ));
  }, [monsters, searchString])

  const handleSearchString = (event) => {
    setSearchString(event.target.value.toLowerCase());
    console.log(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">monsters rolodex</h1>
      <SearchBox onChangeHandler={handleSearchString} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
