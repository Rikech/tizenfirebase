
function submitClick() {
	
	var email = document.getElementById("email").value;
	var username = document.getElementById("username").value;
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var password = document.getElementById("password").value;
	var passwordConf = document.getElementById("passwordConf").value;
	var birthDate = document.getElementById("birthDate").value;
	var graduationDate = document.getElementById("graduationDate").value;
	

  var firebaseRef = firebase.database().ref();
  if(password!=passwordConf){
	  alert('les mots de passe doivent être identiques');
	  return;
  }
  
  if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    
    
   try{ 
	   firebase.auth().createUserWithEmailAndPassword(email, password);
   }
   
   catch(error){
	   var errorCode = error.code;
       var errorMessage = error.message;
       // [START_EXCLUDE]
       if (errorCode == 'auth/weak-password') {
         alert('The password is too weak.');
       } else {
         alert(errorMessage);
       }
       console.log(error);
       // [END_EXCLUDE]
     }
   var userId = firebase.auth().currentUser.uid;
   firebaseRef.child("users").child(userId).child("username").set(username);
   firebaseRef.child("users").child(userId).child("firstname").set(firstname);
   firebaseRef.child("users").child(userId).child("lastname").set(lastname);
 firebaseRef.child("users").child(userId).child("email").set(email);
 firebaseRef.child("users").child(userId).child("birthDate").set(birthDate);
 firebaseRef.child("users").child(userId).child("graduationDate").set(graduationDate);
 document.location='login.html';
}

function SignIn() {
   /* if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {*/
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
     try{
    	 firebase.auth().signInWithEmailAndPassword(email, password);
    		var userId = firebase.auth().currentUser.uid;
        
    		sessionStorage.setItem("uid", userId);
    	  	

    	 	 document.location='index.html';
     }
      catch(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
     
      }
      
   
    }
   
  







