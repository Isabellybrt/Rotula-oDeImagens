// aqui você precisa colocar o firebaseConfig do seu projeto no console do firebase

// const firebaseConfig = {
//     apiKey: " ",
//     authDomain: " ",
//     projectId: " ",
//     storageBucket: " ",
//     messagingSenderId: " ",
//     appId: " ",
//     measurementId: " "
//     };
    
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  