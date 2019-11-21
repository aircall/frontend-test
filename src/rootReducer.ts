import { combineReducers, Reducer } from 'redux'
import IStore from './IStore'
import { activity } from './reducers/activity'

const appReducer: Reducer<IStore> = combineReducers<IStore>({
  activity
})

const rootReducer = (state: IStore | undefined, action: {} & { type: string }): IStore => {
  return appReducer(state, action)
}

export default rootReducer
