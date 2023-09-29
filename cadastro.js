// Configurações do Firebase (substitua pelas suas)
var firebaseConfig = {
    apiKey: "AIzaSyBlx4QEtyPM6PkqSBZX_GD0za2uN7HMypo",
    authDomain: "projeto1-8ad90.firebaseapp.com",
    databaseURL: "https://projeto1-8ad90-default-rtdb.firebaseio.com",
    projectId: "projeto1-8ad90",
    storageBucket: "projeto1-8ad90.appspot.com",
    messagingSenderId: "46168677356",
    appId: "1:46168677356:web:e66f49925cf81dc6973ec9",
    measurementId: "G-Q19S3B4F8R"
  };
  
  // Inicializar o Firebase
  firebase.initializeApp(firebaseConfig);
  
  $("#cadastro-form").submit(function(event) {
      event.preventDefault();
  
      var email = $("#cadastro-email").val();
      var password = $("#cadastro-password").val();
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          alert("Login realizado com sucesso!");
          window.location.href="Login.html"; //alterar para o nome do arquivo de vocês.
      })
      .catch((error) => {
          alert("Erro: cadastro invalido" + error.message);
      });
  });
  