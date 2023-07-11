import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    //alert(`Searching for ${keyword}...`);
    let key = "f5f0a9eb4490812b8cb30o193ft06985";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <section>
        <div className="hint">What word would you like to learn?</div>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
