$(document).ready(function() {
    $('select').formSelect();
});
$(document).ready(function() {
    $('.sidenav').sidenav();
});

var bip = {
    saldo: null,
}


function calcularTarifa() {
    let numCard = parseInt(document.getElementById("icon_prefix").value);
    //let saldoPantalla = document.getElementById('montoSaldo');
    //console.log(numCard);
    let url = (`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numCard}`)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            bip.saldo = data.saldoTarjeta;
            console.log(bip.saldo);
            const saldoSinSimbolos = Number(bip.saldo.replace(/[$,.]+/g, ""))
            console.log(saldoSinSimbolos);
            let tarifa = document.getElementById('tarifa');
            let horarios = tarifa.options[tarifa.selectedIndex].value;
            console.log(horarios);

            let costoTarifa = document.getElementById("costoTarifa");

            costoTarifa.innerHTML = `<p> $ ${horarios}</p>`;

            let saldoFinal = (saldoSinSimbolos - horarios);

            cuadroSaldoFinal.innerHTML = `<p> $ ${saldoFinal}</p>`;

            //a esto restar el valor de la tarifa que elija el usuario
        })
}