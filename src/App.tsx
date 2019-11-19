import React from 'react'

import Header from './Header'
import Activity from './pages/Activity'

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Activity />
      </div>
    </div>
  )
}

export default App
