import React, { useEffect } from "react";
import "./App.css";

import Tile from "./Tile";

const App = () => {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(<></>);

  const updateSearchResults = () => {
    let tiles: JSX.Element[] = [];

    // ! TODO: Make this an actual search and have the Tiles be dynamically generated from a JSON...

    for (let iter = 0; iter < search.length; iter++) {
      tiles.push(
        <Tile
          title="I2C"
          resultId="0"
          tags="Parralel, Communication, Protocol, I2C"
        >
          <p>
            I2C or Inter-Integrated Circuit is a parallel communication protocol
          </p>
          <ul>
            <li>Resources</li>
            <li>
              <a href="https://en.wikipedia.org/wiki/I%C2%B2C" target="_blank">
                I2C Wikipedia
              </a>
            </li>
          </ul>
        </Tile>
      );
    }
    setSearchResults(<>{tiles}</>);
  };

  useEffect(() => {
    updateSearchResults();
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
