import React, { Component } from 'react'

// class Navbar extends Component {
    
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//         {/* <a className="navbar-brand" href="#">{this.props.totalCount}</a> */}
//         <span className="badge badge-pill badge-secondary">{this.props.totalCount}</span>
//         </nav>
//          );
//     }
// }
 
// export default Navbar;

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">{this.props.totalCount}</a> */}
        <span className="badge badge-pill badge-secondary">{props.totalCount}</span>
        </nav>
        
    );
};

export default Navbar;