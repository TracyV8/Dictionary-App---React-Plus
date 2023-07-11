import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech} </h4>
      <p>
        {" "}
        <strong> Definition: </strong>
        {props.meaning.definition}
      </p>
      <p>
        {" "}
        <em>{props.meaning.example}</em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />{" "}
    </div>
  );
}
