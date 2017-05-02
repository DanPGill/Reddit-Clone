import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyCSNFbNK7oY6aoTlL3pL6KZSo65OWBl-ss',
  authDomain: 'reddit-clone-178ed.firebaseapp.com',
  databaseURL: 'https://reddit-clone-178ed.firebaseio.com',
  projectId: 'reddit-clone-178ed',
  storageBucket: 'reddit-clone-178ed.appspot.com',
  messagingSenderId: '1050288807907',
}
export const app = firebase.initializeApp(config)
