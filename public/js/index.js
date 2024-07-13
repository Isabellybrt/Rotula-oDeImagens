auth.onAuthStateChanged(usuarioMudou);

function deslogar() {
    auth.signOut();
}

function usuarioMudou(user) {
    if (user) {
      
    } else {
      console.log("Usuário não autenticado. Redirecionando para a página de login...");
      window.location.href = './html/login.html';
    }
  }