import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArchive,
  faPhone,
  faPhoneSlash,
  faSpinner,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import './css/body.css'
import './css/app.css'
import './css/header.css'
import App from './App.jsx'

library.add(faArchive, faPhone, faPhoneSlash, faSpinner, faEnvelope)

ReactDOM.render(<App/>, document.getElementById('app'))
