$(document).ready(function() {
    M.updateTextFields();
});
const entrar = () => {
    let email2 = document.getElementById("email_inline2").value;
    let pass2 = document.getElementById("pass_inline2").value;

    firebase.auth().signInWithEmailAndPassword(email2, pass2)
        .then(() => {
            location.href = "../html/opciones.html";
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
}

function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
        }
    })
};