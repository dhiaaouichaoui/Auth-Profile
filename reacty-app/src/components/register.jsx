import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link , Switch , Redirect} from "react-router-dom";


class Register extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
          <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <h4 className="text-muted text-center mb-5">Create an account</h4>
    
            <div className="card p-5 shadow">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    type="name"
                    name="name"
                    value={}
                    onChange={}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={}
                    onChange={}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={}
                    onChange={}
                  />
                </div>
                {error ? <p className="text-danger">{}</p> : null}
                <div className="text-center">
                  <button className="btn btn-primary" onClick={}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-2" />
        </div>

        )
    }
}
export default Register;