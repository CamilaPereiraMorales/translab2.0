$(document).ready(function() {
    M.updateTextFields();
});

const registrar = () => {
    let email = document.getElementById("email_inline").value;
    let pass = document.getElementById("pass_inline").value;

    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(() => {
            location.href = "../html/inicio.html";
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
}