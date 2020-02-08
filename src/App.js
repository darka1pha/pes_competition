import React from 'react';
import './App.css';
import 'tachyons';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom' 
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import TeamSelection from './Components/TeamSelection/TeamSelection'
import Authentication from './Components/Authentication/Authentication'
function App() {
  return (
    <Router basename='/pescomp'>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register}/>
          <Route path='/team_selection' component={TeamSelection}/>
          <Route path='/authentication' component={Authentication}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
