import React from 'react';
import './App.css';
import 'tachyons';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom' 
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import TeamSelection from './Components/TeamSelection/TeamSelection'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register}/>
          <Route path='/team_selection/' component={TeamSelection}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
