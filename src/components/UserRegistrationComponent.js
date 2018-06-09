import React from 'react';
import BmrCalculator from './../cantainers/bmr-calculator/BmrCalculator';
import {
    Form, Input, Button, Dropdown, Label, Header, Modal
} from 'semantic-ui-react';
import { goalOptions } from './../constants/goalContants';


const UserRegistrationComponent = ({userState, bmrModal, bmr, updateUserData, toggleBmrModal})=>{
    return (<Form onSubmit={updateUserData}>
        <Header>User Registration</Header>
        <Header as='h4'>Personal details</Header>
        <Form.Field>
            <Input placeholder="First Name" name="firstname" onChange={updateUserData} />
        </Form.Field>
        <Form.Field>
            <Input placeholder="Last Name" name="lastname" onChange={updateUserData}/>
        </Form.Field>
        <Header as='h4'>BMR</Header>
        <Form.Field>
            <Button as='div' labelPosition='right'>
                <Button onClick={toggleBmrModal.bind(null, true)}>Calculate</Button>
                <Label basic={true}>{bmr}</Label>
            </Button>
            
            <Modal open={bmrModal} onClose={toggleBmrModal.bind(null, false)}>
                <Modal.Header>BMR Calculator</Modal.Header>
                <Modal.Content>
                <BmrCalculator/>
                </Modal.Content>
            </Modal>
        </Form.Field>
        <Form.Field>
        <Dropdown placeholder='Select Goal' onChange={updateUserData} name="goal" fluid selection options={goalOptions} />
        </Form.Field>
        <Form.Field>
            <Button type="submit">Submit</Button>
        </Form.Field>
    </Form>)
    }
export default UserRegistrationComponent;