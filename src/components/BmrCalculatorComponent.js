import React, { Component } from 'react';
import {
    Form, Input, Radio, Button, Dropdown, Label, Header
} from 'semantic-ui-react';


const BmrCalculatorComponent = ({ bmrState, onBmrChange, options, bmrFormula }) =>

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
                onChange={onBmrChange}
            />
        </Form.Field>
        <Form.Field>
            <Radio
                label="Female"
                name="gender"
                value="female"
                checked={bmrState.gender === 'female'}
                onChange={onBmrChange}
            />
        </Form.Field>
        <Form.Field>
            <Input placeholder="Age" name="age" onChange={onBmrChange} />
        </Form.Field>
        <Form.Field>
            <Input placeholder="Height in Centimeters" name="height" onChange={onBmrChange} />
        </Form.Field>
        <Form.Field>
            <Input placeholder="Weight in Kg" name="weight" onChange={onBmrChange} />
        </Form.Field>
        <Form.Field>
            <Dropdown placeholder='Select Activity level' onChange={onBmrChange} name="activity_level" fluid selection options={options} />
        </Form.Field>
        <Form.Field>
            <Button
                primary
                onClick={bmrFormula.bind(undefined, bmrState, onBmrChange)}>Calculate</Button>
        </Form.Field>
        <Form.Field>
            <Input name="weight" value={bmrState.bmr || ''} />
        </Form.Field>
    </Form>

export default BmrCalculatorComponent;