import { ThunkAction } from 'redux-thunk'
import IStore from '../IStore'
import { AnyAction } from 'redux'

export type KThunkAction = ThunkAction<Promise<void>, IStore, undefined, AnyAction>
