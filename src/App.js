import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This App was coded by Tracy Vonk and is{" "}
          <a
            href="https://github.com/TracyV8/Dictionary-App---React-Plus"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
