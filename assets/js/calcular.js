$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1'));
$(document).ready(function() {
    $('select').formSelect();
});
$(document).ready(function() {
    $('.sidenav').sidenav();
});

const api = fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${tarjeta}`)
    .then(response => response.json())
    .then(data => {

        let numeroTarjeta = [`N&ordm; tarjeta bip! `];
        let saldoTarjeta = [`Saldo  tarjeta`];
        let fechaSaldo = [`Fecha saldo`];

    })