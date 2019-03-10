import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom"
import Header from './Header.jsx'
import { basePath, callDetailPath } from './paths'
import CallLog from 'components/call_log'
import CallDetail from 'components/call_detail'
import Footer from 'components/footer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Link to={basePath}>
          <Header />
        </Link>
        <Switch>
          <Route path={basePath} exact component={CallLog} />
          <Route path={callDetailPath} component={CallDetail} />
          <Redirect to={basePath} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
