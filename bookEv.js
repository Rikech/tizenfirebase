var nameEvent = document.getElementById("nameevent");
var dateEvent = document.getElementById("datepicker");
var timeEvent = document.getElementById("timepicker");
var categoryEvent = document.getElementById("category");
var priorityEvent = document.getElementById("priority");
var descriptionEvent = document.getElementById("description");
var selectedFile ;
alert("alert");

var pic =document.getElementById("sortpicture");



$("#file").on("change",function(event){
	selectedFile=event.target.files[0];
	alert(selectedFile.name);
});


function submitClick(){
	alert(selectedFile.name);
	var nameval = nameEvent.value;
	var dateval = dateEvent.value;
	var timeval = timeEvent.value;
	var categoryval = categoryEvent.value;
	var priorityval = priorityEvent.value;
	var descriptionval = descriptionEvent.value;


	alert(selectedFile.name);
	var firebaseRef = firebase.database().ref().child("Event");
	alert(selectedFile.name);
	var databaseRef = firebase.storage().ref('/Event/'+selectedFile.name);
	var uploadTask=storageRef.put(selectedFile);
	alert(selectedFile.name);

	

	firebaseRef.push().set({
		name:nameval,
		category:categoryval,
		priority:priorityval,
		date:dateval,
		time:timeval,
		description:descriptionval ,
	});	

	
	};

