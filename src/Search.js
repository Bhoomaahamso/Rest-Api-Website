import React, { useState, useEffect, useContext } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

import { reContext } from "./App";

function Search({ dmode }) {
  const [input, setInput] = useState("");

  const re = useContext(reContext);

  const inputChange = (e) => {
    setInput(e.target.value);
    re.dispatch1D({ type: "searchChange", value: e.target.value });
  };

  useEffect(() => {
      function update() {
  dmode
    ? document
        .querySelector("input[type=text]")
        .style.setProperty("--c", "white")
    : document
        .querySelector("input[type=text]")
        .style.setProperty("--c", "black")
    }
      update();
  }, [dmode])

  return (
    <div className={`search ${dmode && "darkmode"}`}>
      <SearchIcon />
      <input
        type="text"
        className={dmode && "input-dark"}
        value={input}
        placeholder="Search for a country..."
        onChange={inputChange}
      />
    </div>
  );
}

export default Search;