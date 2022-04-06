// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (valueInDolar){
    let valueInYen = valueInDolar* 106.6;
    return Number(valueInYen.toFixed(1));
}
const fromYenToPound = function (valueInYen){
    let valueInPound = valueInYen* 0.00625;
    return Number(valueInPound.toFixed(1));
}

const sum=(a,b)=>{
    return a + b
};

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
