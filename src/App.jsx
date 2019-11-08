import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header/index.jsx'

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <div className='container-view'>Some activities should be here</div>
      </div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
