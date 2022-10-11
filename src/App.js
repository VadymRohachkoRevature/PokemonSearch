import logo from "./logo.svg";
import "./App.css";
import pokemon from "./pokemon.json";
import { useState } from "react";

const Pokemon = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td><button>Select</button></td>
  </tr>
);

function App() {
  const [filter, setFilter] = useState();

  return (
    <div style={{margin: "auto", width:800, paddingTop:"1rem"}}>
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
