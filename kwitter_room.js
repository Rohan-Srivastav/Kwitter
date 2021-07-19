// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCXL-VaKI4ydMVGDqEdZLHFEtRPjlK6PS8",
      authDomain: "kwitter-98a85.firebaseapp.com",
      databaseURL: "https://kwitter-98a85-default-rtdb.firebaseio.com",
      projectId: "kwitter-98a85",
      storageBucket: "kwitter-98a85.appspot.com",
      messagingSenderId: "862549951076",
      appId: "1:862549951076:web:10b712c4f11dbb27701571"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user").innerHTML = "Welcome " + user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirect(this.id)'># " + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function add_room(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

           purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function redirect(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}





