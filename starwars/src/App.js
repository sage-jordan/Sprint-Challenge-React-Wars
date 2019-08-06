import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PersonCard from "./components/Card";

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // const [characters, setCharacters] = useState([]);
  const [people, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios 
      .get ("https://swapi.co/api/people/")
      .then((res) => {
        setPeople(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map((person, index) => <PersonCard key={index} person={person}/>
      )}
    </div>
  );
}

export default App;
