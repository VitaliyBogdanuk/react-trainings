import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem/ProductItem'

import './styles.scss'

const products = require('../goods.json')

class Products extends React.Component {
  state = {
    cart: []
  };

  updateData = (product, type) => {
    switch (type) {
      case 'ADD_TO_CART':
        console.log('add item')
        return this.setState(prevState => ({
          cart: [...prevState.cart, product]
        }))
      case 'REMOVE_FROM_CART':
        console.log('remove item')
        return this.setState({
          cart: this.state.cart.filter(function (item) { return item.id !== product.id })
        })
      default:
        return 'Something went wrong!'
    }
  }

  render () {
    const listItems = products.map((product) =>
      <ProductItem key={product.id} product={product} updateData={this.updateData} />
    )
    console.log(this.state.cart)

    return (
      <div className="store-container">
        <div className="store">
          <div className="store-header">The Best Sport Store!</div>
          <div className="product-list">
            {listItems}
          </div>
          <div className="store-text">
            I decided to be super original and added +/- button to show you Redux works
          </div>
          <div className="store-sum"></div>
        </div>
      </div>
    )
  }
}

Products.propTypes = {
  cart: PropTypes.array
}

export default Products
