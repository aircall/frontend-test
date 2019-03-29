import {combineReducers} from 'redux'
import data from './../Services/Activities/reducer';
import openDetails from './../Services/OpenDetails/reducer';
import isLoading from './../Services/Commons/Loading/reducer';
import currentNav from './../Services/Commons/Nav/reducer';


const rootReducers = combineReducers({
  data,
  isLoading,
  openDetails,
  currentNav
})

export default rootReducers
