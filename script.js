
  const firebaseConfig = {
    apiKey: "AIzaSyDc--387sq_sqsmMWzTIzQvZd-g4-aVMKY",
    authDomain: "gsmtest-9f523.firebaseapp.com",
    databaseURL: "https://gsmtest-9f523-default-rtdb.firebaseio.com",
    projectId: "gsmtest-9f523",
    storageBucket: "gsmtest-9f523.appspot.com",
    messagingSenderId: "30656126464",
    appId: "1:30656126464:web:a925a0e4d20a5a32a442e5"
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	
	var DienAp1;

	


	database.ref("thietbi1/stateTB").on("value", function(snap){
		Led1Status = snap.val().state;
		DienAp1    = snap.val().dienap;
		if(Led1Status == "1"){
			document.getElementById("online").style.color = "#f3219c";  
			//document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("online").style.color = "#059e8a";
			//document.getElementById("act").style.display = "none";
		}
		document.getElementById('temperature1').innerHTML = DienAp1;
		
	});

 	database.ref("thietbi1").on("value", function(snap){
		Led1Status = snap.val().LedStatus;
		if(Led1Status == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		
	});	
	
	


 	database.ref("thietbi2").on("value", function(snap){
		Led2Status = snap.val().LedStatus;
		if(Led2Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		
	});

	
	database.ref("thietbi3").on("value", function(snap){
		Led3Status = snap.val().LedStatus;
		if(Led3Status == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
		
	});

	database.ref("thietbi4").on("value", function(snap){
		Led4Status = snap.val().LedStatus;
		if(Led4Status == "1"){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
		
	});



	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("thietbi1/LedStatus");
		if(Led1Status  == "1"){
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})

	
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("thietbi2/LedStatus");
		if(Led2Status == "1"){
			firebaseRef.set("0");
			Led2Status = "0";
		} else {
			firebaseRef.set("1");
			Led2Status = "1";
		}
	})

	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("thietbi3/LedStatus");
		if(Led3Status == "1"){
			firebaseRef.set("0");
			Led3Status = "0";
		} else {
			firebaseRef.set("1");
			Led3Status = "1";
		}
	})

	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("thietbi4/LedStatus");
		if(Led4Status == "1"){
			firebaseRef.set("0");
			Led4Status = "0";
		} else {
			firebaseRef.set("1");
			Led4Status = "1";
		}
	})
	

	
});