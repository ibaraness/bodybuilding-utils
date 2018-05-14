import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BmrCalculator from './cantainers/bmr-calculator/BmrCalculator';

import {
  Form, Input, Radio, Grid, Segment
} from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid columns={1} padded>
          <Grid.Column>
            <BmrCalculator></BmrCalculator>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default App;
