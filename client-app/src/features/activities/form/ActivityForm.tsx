import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface Props {
    activity: IActivity | undefined;
    closeForm: () => void;
}

export default function ActivityForm({activity, closeForm} : Props) {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Title"></Form.Input>
                <Form.TextArea placeholder="Description"></Form.TextArea>
                <Form.Input placeholder="Category"></Form.Input>
                <Form.Input placeholder="Date"></Form.Input>
                <Form.Input placeholder="City"></Form.Input>
                <Form.Input placeholder="Volume"></Form.Input>
                <Button floated='right' positive type='submit' content='Submit'></Button>
                <Button onClick={closeForm} floated='right' type='button' content='Cancel'></Button>
            </Form>
        </Segment>
    )
}