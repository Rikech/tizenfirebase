var key=sessionStorage.getItem("key");	 

var uid=sessionStorage.getItem('uid');
var firebaseRefforum = firebase.database().ref().child("forums").child(key).child("comments");
	 firebaseRefforum.on("child_added",function(snap) {
		
	 var commentaire =snap.child("commentaire").val();
	 var commented=snap.child("commented").val();
	 var user=snap.child("username").val();
	 var key=snap.key;
	// alert(key);

	
	$("#forum1").prepend("<header>" +
					"<p style='font-family:Arial; " +
						"font-size:10px;" +
						"color:#000000;" +
						"padding-left:1.5em;" +
						"padding-right:1em;" +
						"line-height:21px;'>"+commentaire+"</p>" +
							"<p style='font-family:Arial; " +
								"font-size:10px;color:#777;" +
								"padding-left:1.5em;" +
								"padding-right:1em;" +
								"line-height:21px;'><br>"+commented+"</p><p style='font-family:Arial; " +
								"font-size:10px;color:#777;" +
								"padding-left:1.5em;" +
								"padding-right:1em;" +
								"line-height:21px;'><br> posted by"+user+"</p><hr color='#f6c6c6'>");
	//$("#description").append(description);
	//,"+title+","+description+"
	 });
		

	 






		
		var getTitile=sessionStorage.getItem("getTitile");
		var getDescription=sessionStorage.getItem("getDescription");
		var getPostInf=sessionStorage.getItem("getPostInf");
		var getUserName=sessionStorage.getItem("getUserName");
		
		
		
		
		document.getElementById("title").innerHTML = getTitile;
		document.getElementById("description").innerHTML = getDescription;
		document.getElementById("posted").innerHTML = getPostInf;
		document.getElementById("username").innerHTML ="posted by "+ getUserName;
		
		
		var commentValue=document.getElementById("commenter");
		
		function comment(){
			
			cmnt=commentValue.value;
			
			var now = new Date();
			var annee   = now.getFullYear();
			var mois    = now.getMonth() + 1;
			var jour    = now.getDate();
			var heure   = now.getHours();
			var minute  = now.getMinutes();
			//var seconde = now.getSeconds();
			var tm="commented  on "+jour+"/"+mois+"/"+annee+" at "+heure+" : "+minute;
			
			var user=document.getElementById("hiddenUser").value;
			
			 var firebaseRefforum = firebase.database().ref().child("forums").child(key).child("comments");
			 var newPostKey = firebase.database().ref().child("forums").child(key).child("comments").push().key;
			 firebaseRefforum.child(newPostKey).set({commentaire:cmnt,commented:tm,username:user});
		}