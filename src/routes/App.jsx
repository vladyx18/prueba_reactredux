import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'
import NotFound from '../Containers/NotFound'
import { Layout } from '../Components/Layout/'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default hot(App)
