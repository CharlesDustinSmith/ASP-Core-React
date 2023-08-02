import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';
import { IActivity } from '../models/activity';


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
    <div>
        <Header as='h2' icon='users' content='Reactivities'></Header>
        <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
        <Button content='test'></Button>
    </div>
  );
}

export default App;