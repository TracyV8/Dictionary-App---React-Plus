import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="heading">{props.results.word}</h2>
          <h5 className="Phonetics">
            <em>Phonetics: {props.results.phonetic}</em>
          </h5>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />{" "}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
