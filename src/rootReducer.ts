import { combineReducers, Reducer } from 'redux'
import IStore from './IStore'

const appReducer: Reducer<IStore> = combineReducers<IStore>({})

const rootReducer = (state: IStore | undefined, action: {} & { type: string }): IStore => {
  return appReducer(state, action)
}

export default rootReducer
