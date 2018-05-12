import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BmrCalculator from './cantainers/bmr-calculator/BmrCalculator';

import {
  Form, Input, Radio, Grid, Segment
} from 'semantic-ui-react'

class App extends Component {

  constructor() {
    super();
    this.state = {};
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e, { name, value }) {
    console.log("e", this.state);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        <Grid columns={1} padded>
          <Grid.Column>
            <BmrCalculator bmrState={this.state} onBmrChange={this.handleForm}></BmrCalculator>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default App;
