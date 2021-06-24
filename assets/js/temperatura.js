let btnFarenheit = document.getElementById('farenheit');
let btnKelvin = document.getElementById('kelvin');
let temperatura = document.getElementById('temperatura').value;
let resultado = document.getElementById('resultado');


btnFarenheit.addEventListener('click', event => {
let far= (temperatura * 9/5) + 32;
resultado.textContent = `El resultado en Fahrenheit es: ${far}ºF`;
})
