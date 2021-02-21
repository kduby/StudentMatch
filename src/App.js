import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Router path='/' exact component = 
          {Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
