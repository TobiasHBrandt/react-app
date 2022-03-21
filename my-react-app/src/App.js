import Navbar from './Navbar';
import Home from './Home';
// set router up
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';

function App() {

  const title = "welcome to the new bacon";
  const likes = 50;

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
          <h1>{ title }</h1>
          <p>Liked { likes} times</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
