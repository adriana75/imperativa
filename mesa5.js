const totalAPagar = (vehiculo, litrosConsumidos) => {
    let pagar = 0
    if(vehiculo == "coche"){
        pagar = 86*litrosConsumidos
    }else if(vehiculo == "moto"){
        pagar = 70*litrosConsumidos
    }else if(vehiculo == "autobus"){
        pagar = 55*litrosConsumidos
    }
    litrosConsumidos >= 0 && litrosConsumidos <= 25 ? pagar += 50 : pagar += 25 
    return pagar
}

//console.log(totalAPagar("moto", 26));
