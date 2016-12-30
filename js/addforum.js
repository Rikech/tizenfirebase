
var tit=document.getElementById("title");
var descr=document.getElementById("description");



function ajoutForum() {
	/*var uid=sessionStorage.getItem('uid');
	firebaseUserName= firebase.database().ref().child("users").child(uid).child("username");

	
	firebaseUserName.once('value',function(snap){
		var userName=snap.val();
		//alert(userName);
		var usernameGet=document.getElementById("hiddenUser").value;
		//usernameGet.innerHTML=userName;
		
	});*/
	var user=document.getElementById("hiddenUser").value;
	//alert(user);

	var title =tit.value;
	var description = descr.value;
	var now = new Date();
	var annee   = now.getFullYear();
	var mois    = now.getMonth() + 1;
	var jour    = now.getDate();
	var heure   = now.getHours();
	var minute  = now.getMinutes();
	//var seconde = now.getSeconds();
	var tm="posted  on "+jour+"/"+mois+"/"+annee+" at "+heure+" : "+minute;
	 var firebaseRefforum = firebase.database().ref().child("forums");

var newPostKey = firebase.database().ref().child("forums").push().key;
//alert(newPostKey);
firebaseRefforum.child(newPostKey).set({title:title,description:description,annee:tm,username:user});
  
//document.location='index.html';
}

