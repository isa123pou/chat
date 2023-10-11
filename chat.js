// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
    apiKey: "AIzaSyDAM-277YHrfvlb8AOpK4lXXIfQsxuYdJ0",
    authDomain: "tarea100-901df.firebaseapp.com",
    databaseURL: "https://tarea100-901df-default-rtdb.firebaseio.com",
    projectId: "tarea100-901df",
    storageBucket: "tarea100-901df.appspot.com",
    messagingSenderId: "976088111900",
    appId: "1:976088111900:web:dbbf6a6913affa2f48f8d9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



