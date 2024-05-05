function fromCelciustoFahrenheit() {
    let grade = parseFloat(document.getElementById("txtGrade").value);
    let respuesta = (grade * 1.8) + 32;
    alert("Usted está conviertiendo de grados Fahrenheit a Celcius" + "\n" + 
    "Usted ingresó " + grade + " Celcius "+ "\n" + 
    "La tempertatura es de " + respuesta + " Grado Fahrenheit... FELICITACIONESS LO HAS LOGRADO!!!")
}

function fromtoFahrenheittoCelcius() {
    let grade = parseFloat(document.getElementById("txtGrade").value);
    let respuesta = (grade - 32) / 1.8;
    alert("Usted está conviertiendo de grados Celcius a Fahrenheit" + "\n" + 
    "Usted ingresó " + grade + " Fahrenheit "+ "\n" + 
    "La tempertatura es de " + respuesta + " Grado Celcius")
} 

let button = document.getElementById("btnConvert");

button.addEventListener("click", ()=>{
    let rbCelcius = document.getElementById("rbCelcius").checked;
    
    let rbFahrenheit = document.getElementById("rbFahrenheit").checked;
    if (rbCelcius == true) {
        fromCelciustoFahrenheit();
        rbFahrenheit = false;
    } else {
        if (rbFahrenheit == true) {
            fromtoFahrenheittoCelcius();
            rbCelcius = false;
        } else{
            alert("Por favor seleccione alguna opción valida en los radioButton");
        }
    }
})