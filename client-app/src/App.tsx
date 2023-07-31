import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './Demo';
import DuckItem from './DuckItem';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  // The '[]' was used to add some depenedency making it only call once
  useEffect(() => {
    axios.get("http://localhost:5000/api/activites/")
    .then(response => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {activities.map((activity: any) => (
            <li key={activity.id}>
              {activity.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

// {ducks.map( duck => (
//   <DuckItem duck={ duck } key={duck.name}></DuckItem>
// ))}
// <p>
//   Edit <code>src/App.tsx</code> and save to reload!!!
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>