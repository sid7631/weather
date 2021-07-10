import './App.scss';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './views/Dashboard/Dashboard';
import styled from 'styled-components'

function App() {
  const [coords, setcoords] = useState({})

  useEffect(() => {
    const location = window.navigator && window.navigator.geolocation
    

    if (location) {
      location.getCurrentPosition((position) => {
        setcoords({ 'latitude': position.coords.latitude, 'longitude': position.coords.longitude })
      })
    }

    return () => {
      //cleanup
    }
  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;


const AppContainer = styled.div`
  min-height:100vh;
`;