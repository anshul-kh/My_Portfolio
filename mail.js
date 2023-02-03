const firebaseConfig = {

    apiKey: "AIzaSyD7IjA7UIkE2bGRfIE-y_U6bXgJid-cCk4",
  
    authDomain: "my-portfolio-cd61a.firebaseapp.com",
  
    databaseURL: "https://my-portfolio-cd61a-default-rtdb.firebaseio.com",
  
    projectId: "my-portfolio-cd61a",
  
    storageBucket: "my-portfolio-cd61a.appspot.com",
  
    messagingSenderId: "522425837025",
  
    appId: "1:522425837025:web:131c0421ce67458fe19ea0",
  
    measurementId: "G-JBHQTVYQK1"
  
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email= getElementVal("email");
    var subject=getElementVal("subject");
    var message = getElementVal("message");
  
    saveMessages(name, email,subject, message);
  
    //   enable alert
    // document.querySelector(".alert").style.display = "block";
    console.log("Sent")
    //   remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email,subject, message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      subject:subject,
      message: message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };