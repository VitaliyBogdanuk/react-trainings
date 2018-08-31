import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem/ProductItem'
import CartItem from './CartItem/CartItem'

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
    const cartItemsCount = this.state.cart.length
    const cartItems = this.state.cart.map((item) =>
      <CartItem key={item.id} product={item} />
    )
    console.log(cartItemsCount)
    console.log(this.state.cart)

    return (
      <div className="store-container">
        <div className="store">
          <div className="store-header">The Best Sport Store!</div>
          <table>
            <caption className="store-text">In your cart: {cartItemsCount} items!</caption>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {cartItems}
            </tbody>
          </table>
          <div className="product-list">
            {listItems}
          </div>
        </div>
      </div>
    )
  }
}

Products.propTypes = {
  cart: PropTypes.array
}

export default Products
