import React from 'react'
import PropTypes from 'prop-types'
// import BuyButton from '../BuyButton/BuyButton'
// import RemoveButton from '../RemoveButton/RemoveButton'

import './styles.scss'

export default class ProductItem extends React.Component {
  render () {
    const { product } = this.props

    return (
      <div className="product-item" key={product.id}>{product.title}
        <div className="product-image">
          <img alt={product.title} src={product.img} />
        </div>
        <div className="store-buttons">
          <div className="store-plus"
            onClick={() => { this.props.updateData(product, 'ADD_TO_CART') }}>+</div>
          <div className="store-minus"
            onClick={() => { this.props.updateData(product, 'REMOVE_FROM_CART') }}>-</div>
        </div>
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.object,
  updateData: PropTypes.func
}
