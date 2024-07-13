function cadastroWithEmailAndPassword() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        alert("Usuário cadastrado com sucesso! Um e-mail de verificação foi enviado para " + email);
        // Envie o e-mail de verificação
        return userCredential.user.sendEmailVerification();
      })
      .catch(function(error) {
        var errorMessage = error.message;
        alert("Erro ao cadastrar usuário: " + errorMessage);
      });
}

// Verifica se o usuário está autenticado e se o e-mail foi verificado ao carregar a página
firebase.auth().onAuthStateChanged(function(user) {
  if (user && user.emailVerified) {
    window.location.href = '../index.html';
  }
});

