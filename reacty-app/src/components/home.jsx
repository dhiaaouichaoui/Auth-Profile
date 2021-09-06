import React , {Component} from 'react';

class Home extends  Component{
 constructor(props){
     super(props);
     this.state={
        
       
     
     }
     
 }
   
    render(){
        return (
        <React.Fragment>
             <div className="m-5">
      <div className="jumbotron">
        <p className="lead">Welcome </p>
        <button className="btn btn-danger" >
          Logout
        </button>
      </div>
    </div>
            
            </React.Fragment>
            
            )
    }
}
export default Home;