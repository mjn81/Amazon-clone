import './global/reset.css'
import './global/utilities.css'
import Home from './components/Home'
import {BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom'
import React from 'react'


function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact>
          <Redirect to={'/home'}></Redirect>
      </Route>
      <Route path={'/home'}>
        <Home />
      </Route>
      </Switch>
    </Router>
   
  );
}

export default App
