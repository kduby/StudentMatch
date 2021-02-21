import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/pages/SignUp';
import Messages from './components/pages/Messages';
import Classroom from './components/pages/ClassRoom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/profile' exact component={Home}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/messages' component={Messages}/>
          <Route path='/services' component={Classroom}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
