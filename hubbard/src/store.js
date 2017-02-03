import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { reduxFirebase } from 'react-redux-firebase'
// Replace with your Firebase config
const fbConfig = {
  apiKey: 'AIzaSyCTUERDM-Pchn_UDTsfhVPiwM4TtNIxots',
  authDomain: 'redux-firebasev3.firebaseapp.com',
  databaseURL: 'https://redux-firebasev3.firebaseio.com'
}
export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reduxFirebase(fbConfig, { userProfile: 'users' }),
    // Redux Devtools
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer)
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
