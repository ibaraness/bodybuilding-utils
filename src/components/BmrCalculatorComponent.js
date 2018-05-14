import React, { Component } from 'react';
import {
    Form, Input, Radio, Button, Dropdown, Label, Header
} from 'semantic-ui-react';
import { bmrOptions } from './../constants/bmrConstants';

const BmrCalculatorComponent = ({ bmrState, updateBmrData, calculateBmr }) =>

    <Form>
        <Header>BMR Calculator</Header>
        <Form.Field>
            Gender:
        </Form.Field>
        <Form.Field>
            <Radio
                label="Male"
                name="gender"
                value="male"
                checked={bmrState.gender === 'male'}
                onChange={updateBmrData}
            />
        </Form.Field>
        <Form.Field>
            <Radio
                label="Female"
                name="gender"
                value="female"
                checked={bmrState.gender === 'female'}
                onChange={updateBmrData}
            />
        </Form.Field>
        <Form.Field>
            <Input placeholder="Age" name="age" onChange={updateBmrData} />
        </Form.Field>
        <Form.Field>
            <Input placeholder="Height in Centimeters" name="height" onChange={updateBmrData} />
        </Form.Field>
        <Form.Field>
            <Input placeholder="Weight in Kg" name="weight" onChange={updateBmrData} />
        </Form.Field>
        <Form.Field>
            <Dropdown placeholder='Select Activity level' onChange={updateBmrData} name="activity_level" fluid selection options={bmrOptions} />
        </Form.Field>
        <Form.Field>
            <Button
                primary
                onClick={()=>{calculateBmr(bmrState)}}>Calculate</Button>
        </Form.Field>
        <Form.Field>
            <Input name="bmr" value={bmrState.bmr || ''} />
        </Form.Field>
    </Form>

export default BmrCalculatorComponent;