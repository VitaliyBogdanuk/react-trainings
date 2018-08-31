import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export default class CartItem extends React.Component {
  render () {
    const { item } = this.props

    return (
      <tr className="cart-item" key={item.id}>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.description}</td>
      </tr>
    )
  }
}

CartItem.propTypes = {
  item: PropTypes.object
}
