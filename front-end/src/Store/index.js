import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../Reducers'
import sagas from "../Sagas"

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware
      )
    )
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../Reducers', () => {
      const nextRootReducer = require('../Reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(sagas)
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};
  return store;
}
