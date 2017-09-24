import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers, {forms} from './reducers'
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer
} from 'react-router-redux'
import {combineForms, createForms} from 'react-redux-form'

const history = createHistory()
const middleware = {routerMiddleware}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({
  ...reducers,
  router: routerReducer,
  ...createForms(forms),
}), /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
