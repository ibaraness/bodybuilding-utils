import React, { Component } from 'react';
import './App.css';
import BmrCalculator from './cantainers/bmr-calculator/BmrCalculator';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserRegistration from './cantainers/UserRegistration';
import {
  Grid, Container
} from 'semantic-ui-react';


class App extends Component {

  render() {
    return (
      <Router>
        <Container>
          <Grid columns={1} padded>
            <Grid.Column>
              <Route exact path="/" component={UserRegistration} />
              <Route exact path="/calculator" component={BmrCalculator} />
            </Grid.Column>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default App;
