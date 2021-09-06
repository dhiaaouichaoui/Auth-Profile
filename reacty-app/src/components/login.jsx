import axios from "axios";
import React, { useState } from "react";

class Login extends  Component {
    state={  name:"",
email:"" }
    render() {
        return (
            <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <h4 className="text-muted text-center mb-5">Log into your account</h4>
        <div className="card p-5 shadow">
          <form>
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
                Login
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
export default Login;