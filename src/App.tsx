import React, { useEffect } from "react";
import "./App.css";

import resultContent from "./resultContent.json";

import Tile from "./Tile";

const App = () => {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(<></>);

  useEffect(() => {
    let tiles: JSX.Element[] = [];
    if (search.length == 0) {
      resultContent.result.forEach((result) => {
        tiles.push(
          <Tile title={result.title} resultId="" tags="">
            This is a string...
          </Tile>
        );
      });
    } else {
      resultContent.result
        .filter((result) =>
          result.title.toLowerCase().includes(search.toLowerCase())
        )
        .forEach((result) => {
          tiles.push(
            <Tile title={result.title} resultId="" tags="">
              This is a string...
            </Tile>
          );
        });
    }
    setSearchResults(<>{tiles}</>);
  }, [search]);

  return (
    <div className="App">
      <header>
        <div className="column-wrapper">
          <h1>Knowledge Base</h1>
        </div>
        <div className="column-wrapper">
          <input
            className="search"
            type="text"
            placeholder="Search for a Concept..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>
      </header>
      <main>{searchResults}</main>
    </div>
  );
};

export default App;
