// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyASWopT9pGrNa8---_aMXHCHW22olCNOi8",
      authDomain: "kwitter-6370e.firebaseapp.com",
      databaseURL: "https://kwitter-6370e-default-rtdb.firebaseio.com",
      projectId: "kwitter-6370e",
      storageBucket: "kwitter-6370e.appspot.com",
      messagingSenderId: "520016283081",
      appId: "1:520016283081:web:530c28140aaddfca505418"
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





