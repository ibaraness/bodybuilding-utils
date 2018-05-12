import React, { Component } from 'react';

import BmrCalculatorComponent from './../../components/BmrCalculatorComponent';

const options = [
    {
        text: "little or no exercise",
        value: "1.1"
    },
    {
        text: "lightly active(light exercise/sports 1-3 days/week)",
        value: "1.275"
    },
    {
        text: "moderately active (moderate exercise/sports 3-5 days/week)",
        value: "1.35"
    },
    {
        text: "very active (hard exercise/sports 6-7 days a week)",
        value: "1.525"
    }
];

class BmrCalculator extends Component {

    bmrFormula({ age, weight, height, gender, activity_level }, onBmrChange, e) {
        const bmr = gender === 'female' ? 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age) :
            66 + (13.75 * weight) + (5 * height) - (6.8 * age);
        onBmrChange(e, { name: 'bmr', value: bmr * activity_level });
        console.log("BMR", bmr);
    }
    
    render() {
        return (<BmrCalculatorComponent
            bmrState={this.props.bmrState}
            onBmrChange={this.props.onBmrChange}
            options={options}
            bmrFormula={this.bmrFormula}
        ></BmrCalculatorComponent>)
    }
}

export default BmrCalculator;