$(document).ready(function() {
    $('select').formSelect();
});
$(document).ready(function() {
    $('.sidenav').sidenav();
});

const api = fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numCard}`)
    .then(response => response.json())
    .then(data => {
        let numeroTarjeta = [`id`];
        let saldoTarjeta = [`saldoTarjeta
        `];
        let fechaSaldo = [`fechaSaldo
        `];

        console.log(data);

    })
const verSaldo = () => {
    const numCard = document.getElementById("icon_prefix").value;

}