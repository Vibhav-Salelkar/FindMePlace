import React, { useState } from "react";
import "./styles.css";

let states = [
  "Maharashtra",
  "Karnataka",
  "Goa",
  "Rajasthan",
  "Uttar Pradesh",
  "Bihar",
  "Gujarat",
  "Punjab",
  "Manipur",
  "Madhya Pradesh",
  "Andhra Pradesh",
  "Uttarakhand"
];
let places = {
  Maharashtra: ["Mumbai", "Mahabaleshwar", "Lonavla"],
  Karnataka: ["Mysore Palace", "Hampi", "Coorg"],
  Goa: ["Dudhsagar Falls", "Fort Aguada", "Old Goa"],
  Rajasthan: ["Hawa Mahal", "City Palace", "Jodhpur"],
  "Uttar Pradesh": ["Taj Mahal", "Varanasi", "Mathura"],
  Bihar: ["Madhubani", "Bodh Gaya", "Nalanda"],
  Gujarat: ["Somnath Temple", "Gir National Park", "Rann of Kutch"],
  Punjab: ["Wagah Border", "Golden Temple", "The Rock Garden"],
  Manipur: ["Kangla Fort", "Keibul Lamjao National Park", "Dzukou Valley"],
  "Madhya Pradesh": ["Sanchi Stupa", "Khajuraho temples", "Gwalior"],
  "Andhra Pradesh": ["Araku Valley", "Visakhapatnam", "Suryalanka beach"],
  Uttarakhand: ["Laxman Jhula", "Haridwar", "Nainital"]
};

export default function App() {
  const [place, placeHandler] = useState([]);
  function stateHandler(state) {
    let placesList = places[state];
    placeHandler(placesList);
  }
  function inputHandler(e) {
    let placesList = places[e.target.value];
    if (placesList === undefined) {
      placesList = [];
    }
    placeHandler(placesList);
  }
  return (
    <div className="App">
      <div className="header">
        <h1>FindMePlace</h1>
        <h2>Hey, Welcome!</h2>
        <h4>
          Are you thinking of a tour? Let me help you suggest some places which
          you must visit if you are planning to visit these states.
        </h4>
        <p>
          Select a state to know more{" "}
          <span role="img" aria-label="emoji">
            😉
          </span>
        </p>
        Search:{" "}
        <input style={{ marginBottom: "0.5rem" }} onChange={inputHandler} />
      </div>
      <div className="state">
        {states.map((state) => {
          return (
            <span
              onClick={() => stateHandler(state)}
              key={state}
              style={{
                cursor: "pointer",
                padding: "1rem 1rem",
                lineHeight: "2"
              }}
            >
              {state}
            </span>
          );
        })}
      </div>
      <hr />
      <div className="places">
        {place.map((element) => {
          return (
            <div key={element}>
              <h3>{element}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
