import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';

interface Props {
    activities: IActivity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}></ActivityList>
            </Grid.Column>
        </Grid>
    )
}