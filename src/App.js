import logo from "./logo.svg";
import "./App.css";
import pokemon from "./pokemon.json";
import { useState, useEffect } from "react";

const Pokemon = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td><button onClick={() => console.log(pokemon.id)}>Select</button></td>
  </tr>
);

function Card() {
    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
      .then((response) => {
        // ...
      })
    }, []);
  
  return (<div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src="background.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
        <h1>Question</h1>
      </div>
      <div className="flip-card-back">
        <h1>John Doe</h1>
        <p>Architect & Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>)
};

function App() {
  const [filter, setFilter] = useState();

  return (
    <div style={{margin: "auto", width:800, paddingTop:"1rem"}}>

<Card />

      <h1 className="title">Pokemon Search</h1>
      <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      <div style={{ display: "grid", gridTemplateColumns: "70% 30%", gridColumnGap: "1rem" }}>
        
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon
            .filter((pokemon) => pokemon.name.english.includes(filter))
            .slice(0, 20)
            .map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </tbody>
        </table>
        </div>
    </div>
  );
}

export default App;
