import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface Props {
    activity: IActivity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: IActivity) => void;
    submitting: boolean;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit, submitting} : Props) {

    const initialState = selectedActivity ?? {
        id:'',
        title:'',
        category:'',
        description: '',
        date:'',
        city:'',
        volume:''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);

    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
        // console.group(activity);
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder="Title" value={activity.title} name='title' onChange={handleInputChange}></Form.Input>
                <Form.TextArea placeholder="Description" value={activity.description} name='description' onChange={handleInputChange}></Form.TextArea>
                <Form.Input placeholder="Category" value={activity.category} name='category' onChange={handleInputChange}></Form.Input>
                <Form.Input type='date' placeholder="Date" value={activity.date} name='date' onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="City" value={activity.city} name='city' onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="Volume" value={activity.volume} name='volume' onChange={handleInputChange}></Form.Input>
                <Button loading={submitting} floated='right' positive type='submit' content='Submit'></Button>
                <Button onClick={closeForm} floated='right' type='button' content='Cancel'></Button>
            </Form>
        </Segment>
    )
}