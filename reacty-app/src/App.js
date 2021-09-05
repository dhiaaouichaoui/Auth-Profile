import logo from './logo.svg';
import React,{Component} from 'react'
import './App.css';
import Counter from './components/counter'
import Nav from './components/Nav'
import UserData from './components/UserData'
import { BrowserRouter as Router, Route, Link , Switch , Redirect} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Auth:true

    }
    const prop = props
  }
  render() {
    const PrivateRout =({component:Component, ...rest})=>(
<Route { ...rest } render={(props)=> (
  this.state.Auth===true?
  <Component {...rest}/>:
  <Redirect  to='/' />
)}/>

    )
    return (
      <React.Fragment>
        <Nav/>
       <Router>
       <Switch>
         <Route  exact path="/"  component={Counter}/>
         <PrivateRout exact path="/User"  component={UserData}/>
         <Route  path="*"  render={()=> <h1>404</h1>}/>
         </Switch>
       </Router>
      </React.Fragment>
    )
  }
}

export default App;
