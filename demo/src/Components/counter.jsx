import React, { Component } from 'react'


class Counter extends Component {
    // state = {
    //   value: this.props.counter.value,
    //   tags:["item1","item2","item3"]      
    // };
    // renderTags(){   //----------------------- for rendering an array 
    //     if(this.state.tags.length === 0){return <p>No Tags here!</p>;}
    //     else{return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
    // }
    // handleIncrement = ()=>{
    // //    dispatch an action  incrementValue()
    // //    type:'INC'
    // // s1:+1

    //     //console.log("clicked",this);
    //     // this.setState({value : this.state.value + 1});
    // }
    // handleDelete = ()=>{
    //     //console.log("clicked",this);
    //     this.setState({value : 0});
    // }
    render() {
        //console.log("props"+this.props); 
       return (
        <React.Fragment>
            <div>
            <h4>Product No:{this.props.counter.id}</h4>            
            <span className={this.getBadgeClasses()}>{this.forCounter()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Decrement</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-secondary btn-sm m-2">Delete</button>
            {/* <div>{this.renderTags()}</div> */}
            </div>
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    forCounter(){
        // icn->action->type->s1
        const {value: count} = this.props.counter;
        return count === 0 ? "zero" : count;
    }
}
 
export default Counter;