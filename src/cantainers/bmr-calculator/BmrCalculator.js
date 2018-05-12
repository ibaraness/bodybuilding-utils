import React, { Component } from 'react';
import {
    Form, Input, Radio, Button, Dropdown, Label, Header
} from 'semantic-ui-react'

const bmrFormula = ({age, weight, height, gender, activity_level}, onBmrChange, e)=>{
    const bmr = gender === 'female'? 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age):
                                66 + (13.75 * weight) + (5 * height) - (6.8 * age);
    onBmrChange(e,{name:'bmr', value:bmr * activity_level});
    console.log("BMR", bmr);
}

const options = [
    {
        text:"little or no exercise",
        value:"1.1"
    },
    {
        text:"lightly active(light exercise/sports 1-3 days/week)",
        value:"1.275"
    },
    {
        text:"moderately active (moderate exercise/sports 3-5 days/week)",
        value:"1.35"
    },
    {
        text:"very active (hard exercise/sports 6-7 days a week)",
        value:"1.525"
    }
];

const BmrCalculator = ({bmrState, onBmrChange}) =>
    
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
            <Input placeholder="Age" name="age" onChange={onBmrChange}/>
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
            <Input name="weight" value ={bmrState.bmr || ''} />
        </Form.Field>
    </Form>

    export default BmrCalculator;