import React, { Component } from 'react';
import Navbar from "./Components/navbar";
import Counters from "./Components/counters";
import './App.css';

class App extends Component {
  state = { 
    counters: [
        {id :1, value: 4},
        {id :2, value: 0},
        {id :3, value: 0},
        {id :4, value: 0}
    ]
 }
    handleIncrement = counter => {
        console.log("increment clicked");
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        
        this.setState({counters});
    };
    handleDecrement = counter => {
      console.log("Decrement clicked");
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      if(counters[index].value>0)
        {counters[index].value--;}
      
      
      this.setState({counters});
  };
    handleReset = ()=>{
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };
    handleDelete = (counterId) => {
        const updated = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters : updated});
    };
  render() { 
    return ( <React.Fragment>  
      <Navbar totalCount = {this.state.counters.filter(c => c.value>0).length} />
      <Counters 
       onReset={this.handleReset}
       onDelete={this.handleDelete} 
       onIncrement={this.handleIncrement} 
       onDecrement={this.handleDecrement} 
       counter={this.state.counters}/>  
      </React.Fragment>);
  }
}
 
export default App;

