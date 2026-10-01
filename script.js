async function buscarClima() {

    let cidade = document.getElementById("cidade").value;

    let resultado = document.getElementById("resultado");


    if (cidade == "") {
        resultado.innerHTML = "Digite uma cidade!";
        return;
    }


    resultado.innerHTML = "Carregando...";


    let apiKey = "SUA_API_KEY";


    try {

        let resposta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
        );


        if (!resposta.ok) {
            throw new Error("Cidade não encontrada");
        }


        let dados = await resposta.json();


        resultado.innerHTML = `

            <h2>${dados.name}</h2>

            <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png">

            <p><strong>Temperatura:</strong> ${dados.main.temp}°C</p>

            <p><strong>Sensação térmica:</strong> ${dados.main.feels_like}°C</p>

            <p><strong>Umidade:</strong> ${dados.main.humidity}%</p>

            <p><strong>Clima:</strong> ${dados.weather[0].description}</p>

        `;


    } catch (erro) {

        resultado.innerHTML = "Erro ao buscar o clima. Verifique a cidade.";

    }

}