import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { rootReducer } from './ducks/reducers'
import { BrowserRouter } from 'react-router-dom'

var firebaseConfig = {
  apiKey: 'AIzaSyAd1yYTPbdUiaGGWyartaecr_nzfC03lQk',
  authDomain: 'todosovercomplicated.firebaseapp.com',
  databaseURL: 'https://todosovercomplicated.firebaseio.com',
  projectId: 'todosovercomplicated',
  storageBucket: 'todosovercomplicated.appspot.com',
  messagingSenderId: '301788317919',
  appId: '1:301788317919:web:b7df6f2c95e8c9bb6c816a'
}
// Initialize Firebase

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
firebase.initializeApp(firebaseConfig)
firebase.firestore()
const initialState = {}
const store = createStore(rootReducer, initialState)
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance //since we are using Firestore
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
