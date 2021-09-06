import logo from './logo.svg';
import React,{Component} from 'react'
import './App.css';
import Home from './components/home'
import Register from './components/register'
import UserData from './components/UserData'
import Login from './components/login'
import { BrowserRouter , Route, Link , Switch , Redirect} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     

    }
    const prop = props
  }
  render() {
  
    return (
      <React.Fragment>
       <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;
