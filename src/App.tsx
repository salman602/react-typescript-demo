import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Lists from './components/Lists';
import Person from './components/Person';
import PersonLists from './components/PersonLists';
import Status from './components/Status'
import Todos from './components/Todos';

const person = {
  first: "Fatema",
  last: "Binte Ashiq"
};
const personLists = [
  {
    first: "Fatema",
    middle: "Binte",
    last: "ashiq"
  },
  {
    first: "Abdullah",
    middle: "Bin",
    last: "Salman"
  },
  {
    first: "Abdur Rahman",
    middle: "Bin",
    last: "Salman"
  }
];



function App() {
  return (
    <div className="App">
      <p>I am using react with typescript for the first time.</p>
      <Greet name="Salman" messages={2} />
      <Person name={person} />
      <PersonLists names={personLists} />
      <Status status="success" />
      <Lists />
      <Todos />
    </div>
  );
}

export default App;
