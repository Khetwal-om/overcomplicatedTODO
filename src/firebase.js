import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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
firebase.initializeApp(firebaseConfig)
