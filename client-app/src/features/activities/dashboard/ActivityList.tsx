import React from 'react';
import { IActivity } from '../../../app/models/activity';
import { Button, Item, Label, Segment } from 'semantic-ui-react';

interface Props {
    activities: IActivity[];
}

export default function ActivityList({activities}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item  key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.volume}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue'></Button>
                                <Label basic content={activity.category}></Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}