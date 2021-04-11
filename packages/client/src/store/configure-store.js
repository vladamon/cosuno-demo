import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'

import rootReducer from './rootReducer'
import { rootSagas } from './rootSagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
	  : compose

const enhancer = composeEnhancers(
  applyMiddleware(...[sagaMiddleware])
  // other store enhancers if any
)

export const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSagas)
