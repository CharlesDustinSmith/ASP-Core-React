import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface Props {
  activity: IActivity;
  cancelSelectActivity: () => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity }: Props) {
  return (
    <Card fluid>
      <Image src={`assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span >{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group width='2'>
          <Button basic color='blue' content='Edit'></Button>
          <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel'></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}