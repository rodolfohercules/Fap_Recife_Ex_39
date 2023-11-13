// Classe abstrata Veiculo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        // Criar um novo objeto e copiar os atributos
        const novoVeiculo = Object.create(this);
        return novoVeiculo;
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

// Subclasse Carro
class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    represent() {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

// Subclasse Moto
class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, tipo) {
        super(modelo, marca, cor, numeroRodas);
        this.tipo = tipo;
    }

    represent() {
        return `${super.represent()}, Tipo: ${this.tipo}`;
    }
}

// Classe de aplicação
class Aplicacao {
    constructor() {
        this.veiculos = [];
        this.clones = [];
    }

    criarVeiculos() {
        this.veiculos.push(new Carro("Civic", "Honda", "Preto", 4, 4));
        this.veiculos.push(new Moto("Ninja", "Kawasaki", "Vermelho", 2, "Esportiva"));
        this.veiculos.push(new Carro("Golf", "Volkswagen", "Azul", 4, 2));
        this.veiculos.push(new Moto("Street", "Harley-Davidson", "Preto", 2, "Cruiser"));
        this.veiculos.push(new Carro("Focus", "Ford", "Branco", 4, 4));
        this.veiculos.push(new Moto("CBR", "Honda", "Amarelo", 2, "Esportiva"));
    }

    clonarVeiculos() {
        this.clones = this.veiculos.map(veiculo => veiculo.clone());
    }

    representarClones() {
        this.clones.forEach(clone => {
            console.log(clone.represent());
        });
    }
}

// Exemplo de uso
const aplicacao = new Aplicacao();
aplicacao.criarVeiculos();
aplicacao.clonarVeiculos();
aplicacao.representarClones();
