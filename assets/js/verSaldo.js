$(document).ready(function() {
    $('select').formSelect();
});
$(document).ready(function() {
    $('.sidenav').sidenav();
});



var bip = {
    saldo: null,
}


function verSaldo() {
    let numCard = document.getElementById("icon_prefix").value;
    let saldoPantalla = document.getElementById('montoSaldo');
    //console.log(numCard);
    let url = (`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numCard}`)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            bip.saldo = data.saldoTarjeta;
            console.log(bip.saldo);
            saldoPantalla.innerHTML = `<p>${bip.saldo}</p>`;
        })
}