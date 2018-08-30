import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Products from './pages/Products'
import OrderForm from './pages/OrderForm'
import OrderInfo from './pages/OrderInfo'

const routes = () => {
  return (
    <Switch>
      <Route
        exact path="/"
        render={() => {
          return <Redirect to="/products/" />
        }}
      />
      <Route key="products" path="/products" component={Products} />
      <Route key="order-form" path="/order-form" component={OrderForm} />
      <Route key="order-info" path="/order-info" component={OrderInfo} />

      <Route
        key="not-found"
        render={() => {
          return <p>NOT FOUND</p>
        }}
      />
    </Switch>
  )
}

export default routes
