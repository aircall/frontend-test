import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'
import Header from './components/Header/index.jsx'
import Activities from './pages/Activities/index.jsx'
import ActivityDetail from './pages/ActivityDetail/index.jsx'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route path='/:id' component={ActivityDetail} />
            <Route path='/' component={Activities} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
