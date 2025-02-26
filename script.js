class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0;
        this.ligado = false;
        this.somLigando = new Audio('som_ligando.mp3'); 
    }

    ligar() {
        this.ligado = true;
        console.log("Carro ligado!");
        this.somLigando.play(); 
    }

    desligar() {
        this.ligado = false;
        this.velocidade = 0;
        console.log("Carro desligado!");
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 10;
            console.log("Carro acelerando! Velocidade: " + this.velocidade + " km/h");
        } else {
            console.log("O carro precisa estar ligado para acelerar!");
        }
    }
}

const meuCarro = new Carro("Sedan", "Prata");

const carroModeloElement = document.getElementById("carro-modelo");
const carroCorElement = document.getElementById("carro-cor");
const carroVelocidadeElement = document.getElementById("carro-velocidade");
const carroEstadoElement = document.getElementById("carro-estado");
const ligarDesligarButton = document.getElementById("ligar-desligar");
const acelerarButton = document.getElementById("acelerar");

carroModeloElement.textContent = "Modelo: " + meuCarro.modelo;
carroCorElement.textContent = "Cor: " + meuCarro.cor;
carroVelocidadeElement.textContent = "Velocidade: " + meuCarro.velocidade + " km/h";
carroEstadoElement.textContent = "Estado: " + (meuCarro.ligado ? "Ligado" : "Desligado");


ligarDesligarButton.addEventListener("click", function() {
    if (meuCarro.ligado) {
        meuCarro.desligar();
        ligarDesligarButton.textContent = "Ligar";
        carroEstadoElement.textContent = "Estado: Desligado";
        carroEstadoElement.classList.remove("ligado"); 
    } else {
        meuCarro.ligar();
        ligarDesligarButton.textContent = "Desligar";
        carroEstadoElement.textContent = "Estado: Ligado";
        carroEstadoElement.classList.add("ligado");
    }
    carroVelocidadeElement.textContent = "Velocidade: " + meuCarro.velocidade + " km/h";
});

// Evento de Clique do Botão Acelerar
acelerarButton.addEventListener("click", function() {
    meuCarro.acelerar();
    carroVelocidadeElement.textContent = "Velocidade: " + meuCarro.velocidade + " km/h";
});