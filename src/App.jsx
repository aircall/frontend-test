import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header/index.jsx'
import Activities from './components/Activities/index.jsx'

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <Activities />
      </div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
