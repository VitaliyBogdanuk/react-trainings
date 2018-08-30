import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

class Navigation extends React.Component {
  render () {
    return (
      <nav className="main-navigation">
        <NavLink to='/products' activeClassName="active">Products</NavLink>
        <NavLink to='/order-form' activeClassName="active">Order form</NavLink>
        <NavLink to='/order-info' activeClassName="active">Order info</NavLink>

      </nav>
    )
  }
}

export default Navigation
