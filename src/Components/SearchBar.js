import React, { useState } from "react";
import "./Components.css";
import { Button } from "bootstrap";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";


function SearchBar({ savePage, placeholder, data, scLink}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const navigate = useNavigate()

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });


    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }


    // have to use onClick to save state and then take state to display page

  };

  const clickLink = (e, value) => {

    // Push Function
    this.props.history.push({
      pathname: '/main',
        state: [value] // your data array of objects
    })
    console.log(value);
    savePage(value);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />

      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div>
                <Link
                    to={{
                      pathname: "/page",
                      state: data // your data array of objects
                    }}
                  ></Link>
                <a onClick={(e) => clickLink(e, value)} className="dataItem" href={value.ID}>
                  <p>{value.name} </p>
                </a>
              </div>
              
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
















