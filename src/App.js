import './global/reset.css'
import './global/utilities.css'
import Home from './components/Home'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import React from 'react'


function App() {
  return (
    <Router>
      <Route>
        <React.Fragment>
          <Home />
        </React.Fragment>
      </Route>
    </Router>
   
  );
}

export default App
