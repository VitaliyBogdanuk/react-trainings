import React from 'react'

import './styles.scss'

class OrderForm extends React.Component {
  render () {
    return (
      <div className="test-router-container">
        <div className="test-router">
          <div className="test-router-header">
            This is Order Form page
          </div>
          <div className="test-router-text">
            {/* Have you noticed the elements have styles? (styles are loaded) */}
          </div>
          <div className="test-router-text">
            {/* If you go back to the previous page, the sum will stay the same. (Redux working) */}
          </div>
        </div>
      </div>
    )
  }
}

export default OrderForm
