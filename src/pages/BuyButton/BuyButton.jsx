import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class BuyButton extends React.Component {
  render () {
    const { product } = this.props
    return (
      <div className="store-plus" onClick={() => { this.props.updateData(product, 'ADD_TO_CART') }}>+</div>
    )
  }
}

BuyButton.propTypes = {
  product: PropTypes.object,
  updateData: PropTypes.func
}

export default BuyButton
