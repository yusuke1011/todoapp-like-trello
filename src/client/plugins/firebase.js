import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAaw8AxDjTH1rSAWOKh94zMVm6ULyPh0QQ",
    authDomain: "todoliketorellp.firebaseapp.com",
    databaseURL: "https://todoliketorellp.firebaseio.com",
    projectId: "todoliketorellp",
    storageBucket: "todoliketorellp.appspot.com",
    messagingSenderId: "482880681784"
  })
}

export default firebase