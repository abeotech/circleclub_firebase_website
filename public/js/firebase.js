const form = document.querySelector('.form');
//grab input email
const inputEmail = form.querySelector('#inputEmail');

//config for firebase push
const config = {
  apiKey: "AIzaSyB1bWnFyhWVCf_Objl8cN8KCEZd8jMQZ7s",
  authDomain: "circleclub.firebaseapp.com",
  databaseURL: "https://circleclub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "circleclub",
  storageBucket: "circleclub.appspot.com",
  messagingSenderId: "794101718916",
  appId: "1:794101718916:web:668e9b578bcafab73547d1",
  measurementId: "G-PH5X5984ZS"
};
//create a function to push
function firebasePush(input){
  //prevents from breaking
  firebase.initializeApp(config);
  //push itself
  var mailsRef = firebase.database().ref('emails').push().set{
    {
      mail: input.value
    }
  }
}
//push on form submit
  form.addEventListener('submit', function(evt){
    evt.preventDefault();
    alert("Hello! I am an alert box!!");
    firebasePush(inputEmail);
    return alert("You've been added to the waiting list");
  })
