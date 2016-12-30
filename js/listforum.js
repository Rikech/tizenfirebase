
	 var firebaseRefforum = firebase.database().ref().child("forums");
	 firebaseRefforum.on("child_added",function(snap) {
		
	 var title =snap.child("title").val();
	 var description=snap.child("description").val();
	 var key=snap.key;
	// alert(key);
	 var posted=snap.child("annee").val();
	 var userName=snap.child("username").val();
	 
	 
	 sessionStorage.setItem(key+"title", title);
	 sessionStorage.setItem(key+"description", description);
	 sessionStorage.setItem(key+"posted", posted);
	 sessionStorage.setItem(key+"userName", userName);
	 
	//alert(title);
	$("#forum").prepend("<header>" +
			"<h2>"+title+"<br>" +
					"</h2>" +
					"</header>" +
					"<p style='font-family:Arial; " +
					"font-size:15px;" +
					"color:#000000;" +
					"padding-left:1.5em;" +
					"padding-right:1em;" +
					"line-height:21px;'>"+description+"" +
							"</p>" +
							"<p style='font-family:Arial; " +
							"font-size:15px;color:#777;" +
							"padding-left:1.5em;" +
							"padding-right:1em;" +
							"line-height:21px;'><br><br>"+posted+"<br>posted by "+userName+"</p><br><div class='6u$ 12u$(small)'><input type='submit' id='"+key+"' value='Comment' class='button special small fit' onclick='comment(this.id)' /></div><hr color='#f6c6c6'>");
	//$("#description").append(description);
	//,"+title+","+description+"
	 });

	 function comment(key,title,description,postedd,username) {
		//alert(key);
		var getTitile=sessionStorage.getItem(key+"title");
		var getDescription=sessionStorage.getItem(key+"description");
		var getPostInf=sessionStorage.getItem(key+"posted");
		var getUserName=sessionStorage.getItem(key+"userName");
	//	alert(getPostInf);
		
		sessionStorage.setItem("key",key);
		sessionStorage.setItem("getTitile",getTitile);
		sessionStorage.setItem("getDescription",getDescription);
		sessionStorage.setItem("getPostInf",getPostInf);
		sessionStorage.setItem("getUserName",getUserName);
		 document.location='Comment.html';
		
		}


