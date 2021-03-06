import {
  createStore as reduxCreateStore,
  applyMiddleware,
  Action,
  Reducer,
  Middleware,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

let baseMiddleware: Middleware[] = []
if ((process.env.LOG_REDUX || '').toLowerCase() === 'true') {
  baseMiddleware = baseMiddleware.concat(logger)
}
const composeEnhancers = composeWithDevTools({})

export function createStore<S, A extends Action, Ext, StateExt>(
  reducer: Reducer<S, A>,
  middleware: Middleware[],
) {
  return reduxCreateStore(
    reducer,
    composeEnhancers(applyMiddleware(...[...baseMiddleware, ...middleware])),
  )
}
