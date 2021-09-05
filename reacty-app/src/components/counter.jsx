import React , {Component} from 'react';

class Counter extends  Component{
 constructor(props){
     super(props);
     this.state={
        
        count:0
     
     }
     this.increment=this.increment.bind(this)
     this.Getclass=this.Getclass.bind(this)
 }
    increment() {
        this.setState({
        count: this.state.count + 1
        })
      };
      Getclass(){
          let classes="badge m-2 badge-";
          classes += this.state.count ===0 ? "warning" : "primary";
          return classes;
      }
    render(){
        return (<React.Fragment><h1 className={this.Getclass}>{this.state.count}</h1>
            <button onClick={this.increment}>increment</button>
            </React.Fragment>
            
            )
    }
}
export default Counter;