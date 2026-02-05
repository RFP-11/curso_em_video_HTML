function ConverterDolar() {
    var valorDolar = document.getElementById("valorDolar").value;
    var valorEmReal = (parseFloat(valorDolar) * 5.23).toFixed(2);        
    var elementoValorConvertido = document.getElementById("valorConvertidoDeDolar");
    var valorEmRealString = String(valorEmReal).replace('.', ',');
    var valorConvertidoDeDolar = "O valor em real é R$:" + valorEmRealString;
    elementoValorConvertido.innerHTML = valorConvertidoDeDolar;
    }

    function ConverterEuro() {
    var valorEuro = document.getElementById("valorEuro").value;
    var valorEmReal = (parseFloat(valorEuro) * 5.19).toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertidoDeEuro");
    var valorEmRealString = String(valorEmReal).replace('.', ',');
    var valorConvertidoDeEuro = "O valor em real é R$:" + valorEmRealString;
    elementoValorConvertido.innerHTML = valorConvertidoDeEuro;
    }

    function ConverterQuilometros() {
    var valorQuilometros = document.getElementById("valorQuilometros").value;
    var AnosLuz = parseFloat(valorQuilometros) / (9.46 * (10 ** 12));
    var elementoValorConvertido = document.getElementById("valorConvertidoDeQuilometros");
    var valorConvertidoDeQuilometros = `${valorQuilometros} Km = ${AnosLuz} Anos-luz`;
    elementoValorConvertido.innerHTML = valorConvertidoDeQuilometros;
    }

    function ConverterAnosLuz() {
    var valorAnosLuz = document.getElementById("valorAnosLuz").value;
    var Quilometros = parseFloat(valorAnosLuz) * (9.46 * (10 ** 12));
    var elementoValorConvertido = document.getElementById("valorConvertidoDeAnosLuz");
    var valorConvertidoDeAnosLuz = `${valorAnosLuz} Anos-luz = ${Quilometros} Km`;
    elementoValorConvertido.innerHTML = valorConvertidoDeAnosLuz;
    }

    function ConverterCelsius() {
    var valorCelsius = document.getElementById("valorTemperaturaCelsius").value;
    var temperturaKelvin = (parseFloat(valorCelsius) + 273.15).toFixed(2);
    var temperaturaFahrenheit = ((parseFloat(valorCelsius) * 9 / 5) + 32).toFixed(2);
    var elementoValorConvertido = document.getElementById("temperaturaConvertidaDeCelsius");
    var temperaturaConvertidaDeCelsius = `${valorCelsius}°C = ${temperaturaFahrenheit}°F = ${temperturaKelvin}K`;
    elementoValorConvertido.innerHTML = temperaturaConvertidaDeCelsius;
    }

    function ConverterFahrenheit() {
    var valorFahrenheit = document.getElementById("valorTemperaturaFahrenheit").value;
    var temperturaKelvin = (((parseFloat(valorFahrenheit) - 32) * 5 / 9) + 273.15).toFixed(2);
    var temperaturaCelsius = ((parseFloat(valorFahrenheit) - 32) * 5 / 9 ).toFixed(2);
    var elementoValorConvertido = document.getElementById("temperaturaConvertidaDeFahrenheit");
    var temperaturaConvertidaDeFahrenheit = `${valorFahrenheit}°F = ${temperaturaCelsius}°C = ${temperturaKelvin}K`;
    elementoValorConvertido.innerHTML = temperaturaConvertidaDeFahrenheit;
    }

    function ConverterKelvin() {
    var valorKelvin = document.getElementById("valorTemperaturaKelvin").value;
    var temperturaFahrenheit = (((parseFloat(valorKelvin) - 273.15) * 9 / 5) + 32).toFixed(2);
    var temperaturaCelsius = (parseFloat(valorKelvin) - 273.15).toFixed(2);
    var elementoValorConvertido = document.getElementById("temperaturaConvertidaDeKelvin");
    var temperaturaConvertidaDeKelvin = `${valorKelvin}K = ${temperaturaCelsius}°C = ${temperturaFahrenheit}°F`;
    elementoValorConvertido.innerHTML = temperaturaConvertidaDeKelvin;
    }