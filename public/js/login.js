auth.onAuthStateChanged(usuarioMudou);

function loginWithEmailAndPassword() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Não foi possível fazer o login.');
        });
}

const provider = new firebase.auth.GoogleAuthProvider();
function loginWithGoogle(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    })
    .catch((error) => {
        console.error(error);
    });
}

function usuarioMudou(user){
    if (user) {
        console.log("Usuário autenticado:", user);
        window.location.href = '../index.html';
    } else {
        console.log("Usuário não autenticado. Redirecionando para a página de login...");
    }
}





