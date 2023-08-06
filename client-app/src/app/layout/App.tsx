import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';


function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  // The '[]' was used to add some depenedency making it only call once
  useEffect(() => {
    axios.get<IActivity[]>("http://localhost:5000/api/activities")
    .then(response => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities}></ActivityDashboard>
      </Container>
    </>
  );
}

export default App;