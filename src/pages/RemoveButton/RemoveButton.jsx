import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class RemoveButton extends React.Component {
  render () {
    const { product } = this.props
    return (
      <div className="store-minus" onClick={() => { this.props.updateData(product, 'REMOVE_FROM_CART') }}>-</div>
    )
  }
}

RemoveButton.propTypes = {
  product: PropTypes.object,
  updateData: PropTypes.func
}

export default RemoveButton
