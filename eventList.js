

var firebaseEventsRef = firebase.database().ref().child("Event");










firebaseEventsRef.on('child_added', function(snap){

	var name = snap.child("name").val();
	var category = snap.child("category").val();
	var priority = snap.child("priority").val();
	var date = snap.child("date").val();
	var time = snap.child("time").val();
	var description = snap.child("description").val();
	const newli = document.createElement("table");
var html="<tr><td height='40'></td></tr><tr><td style='background:url(C:/wamp/www/newtizen/images/eventphoto.jpg) no-repeat 0px 0px #E6842D; background-size:cover;' height='260'>	</td></tr><tr align='left'>	<td style='padding-left: 25px;color: #69B922;font-size: 2.1em;font-family: 'Century Gothic';letter-spacing: 2px;'><a href='event_detail.html'>"+name+"</a>	</td></tr><tr><td class='new-text' style='font-family:Arial; font-size:15px;color:#777;padding-left:1.5em;padding-right:1em;line-height:21px;'>"+date+" à "+time+" category: "+category+"priority: "+priority+"</br>"+description+"</td></tr><tr><td height='60'></td></tr>"

       
        newli.innerHTML =html;
             
     
        document.getElementById('divtest').appendChild(newli);


});

