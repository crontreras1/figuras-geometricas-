// console.group(cuadrado);

//perimetro del cuadrado = la suma de todos los lados. 

function areaCuadrado (lado) {
    const area = lado * 4;
    return area;
    //console.log(area);
}

areaCuadrado();

//area del cuadrado = multiplicar uno de los lados por el mismo lado

function perimetroCuadrado (lado) {
    const perimetro = lado * lado;
    return perimetro;
    //console.log(perimetro);
}

perimetroCuadrado();

// console.groupEnd();

//perímetro del triángulo= la suma de los 3 lados 

function perimetroTriangulo (ladoA, ladoB, base) {
    const perimetro = ladoA + ladoB + base;
    return perimetro;
    //console.log(perimetro);
}

perimetroTriangulo();

//area del triangulo = multiplicar la base por la altura y dividirlo entre dos. 

function areaTriangulo (base, altura) {
    const area = (base * altura) / 2; 
    return area;
    //console.log(area);
}

areaTriangulo();

//perímetro del circulo (circunferencia) = diametro multiplicado por PI

const PI = Math.PI; 

function circunferenciaCirculo (diametro) {
    const circunferencia = diametro * PI;
    return circunferencia;
    //console.log(circunferencia)
}

circunferenciaCirculo();

//area del circulo = radio al cuadrado multiplicado por PI. 

function areaCirculo (radio) {
    const area = (radio * radio) * PI;
    return area;
    //console.log(area);
}

areaCirculo();

//Interacción con el HTML:

//Cuadrado:
function calcularAreaCuadrado () {
    const inputArea = document.getElementById('inputCuadrado');
    const value = inputArea.value;
    const area = areaCuadrado(value);
    alert('El área de tu cuadrado es de: ' + area + 'cm');
}

function calcularPerimetroCuadrado () {
    const inputPerimetro = document.getElementById('inputCuadrado');
    const value = inputPerimetro.value;
    const perimetro = perimetroCuadrado(value);
    alert('El perimetro de tu caudrado es de: ' + perimetro + 'Cm cuadrados');
}

//Triangulo:

function calcularPerimetroTriangulo () {
    const ladoA = document.getElementById('inputLadoA');
    const valueA = ladoA.value;
    const ladoB = document.getElementById('inputLadoB');
    const valueB = ladoB.value;
    const base = document.getElementById('inputBase');
    const valueBase = base.value;
    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    alert(perimetro);
}