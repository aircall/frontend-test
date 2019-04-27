import { createStore } from 'redux'
import app from './reducers.js'

export const store = createStore(app)
