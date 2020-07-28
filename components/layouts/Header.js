import React from 'react'
import PropTypes from 'prop-types'
const Header = (props) => {
  const {brand} = props; //Destructuring
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3
    py-0">
      <div className="container">
      <a href="/" className="navbar-brand">{brand}</a>
        <ul className="navbar-nav mr">
           <li className="nav-item">
             <a href="/" className="nav-link" >Home</a>
           </li>
        </ul>
      </div>
    </nav>

  )    
}
const HeadingStyle = {
color:'blue',fontSize:'18px'
}

Header.defaultProps = {
  brand: 'The default'
};

Header.PropTypes = {
  brand: PropTypes.string.isRequired
};


export default Header
