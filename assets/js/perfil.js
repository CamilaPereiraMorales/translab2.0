$(document).ready(function() {
    $('.sidenav').sidenav();
});
$(document).ready(function() {
    $('.materialboxed').materialbox();
});

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
            console.log(email);

            userEmail.innerHTML = `<p> ${email}</p>`;
            // ...
        } else {
            // User is signed out.
            // ...
        }

    })
}
observador();

function logOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        location.href = '../html/inicio.html';
    }).catch(function(error) {
        // An error happened.
    })
};

function guardarTarjeta() {
    let tarjetaIngresada = document.getElementById("icon_prefix2").value;
    document.getElementById("icon_prefix2").value = "";
    console.log(tarjetaIngresada);
    card.innerHTML += `<div> ${tarjetaIngresada}</div>`;


};