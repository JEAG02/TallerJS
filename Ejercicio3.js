function bmi (peso, altura){
    const IMC= peso/(altura*altura);
    if(IMC<18.5){
        return "Bajo de peso";
    }
    else if(IMC>=18.5 && IMC<=24.9){
        return "Normal";
    }
    else if(IMC >=25 && IMC<=29.9){
        return "Sobre peso";
    }
    else{
        return "Obeso";
    }
}
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"