import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import HomePage from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import './App.css'
import UserBalance from './Pages/UserBalance';

function App() {
  return (
    <div className="bg-dark" id="app">
      <Navbar/>
      <Switch>
        <Route path="/user/balance" component={UserBalance}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
        <Route path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
