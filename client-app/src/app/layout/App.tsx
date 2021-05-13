import React from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import NavBar from './navbar';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/activities' component={ActivityDashboard}/>
        <Route path='/activities/:id' component={ActivityDetails}/>
        <Route path='/createActivity' component={ActivityForm}/>
      </Container>
    </>
  );
}

export default observer(App);
