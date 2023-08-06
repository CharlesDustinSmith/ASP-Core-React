import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: IActivity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {activities[0]&&
                <ActivityDetails activity={activities[0]}></ActivityDetails>}
                <ActivityForm></ActivityForm>
            </Grid.Column>
        </Grid>
    )
}