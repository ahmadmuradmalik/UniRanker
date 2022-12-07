import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../Components/List.js";
import "./Components.css";

function SearchBar() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    }
  return (
    <div className="search">
      <h1>School Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}


export default SearchBar;
















