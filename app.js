// classe do heroi que recebe nome, idade, tipo
class hero {
  //método para receber os parâmetros do herói
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  //valida e gera o ataque de acordo com o tipo do herói
  attack(type) {
      type = this.type
      let attack = "";
    //estrutura para verificar os tipos e definir o ataque
    switch(type) {
      case "Mago":
        attack = "usou magia"
      break;
      case "Guerreiro":
        attack = "usou espada"
      break;
      case "Monge":
        attack = "usou artes marciais";
      break;
      case "Ninja":
        attack = "usou shuriken";
      break;
      default:
        this.type = "Humano"
        attack = "usou a panela";
      break
    }

    return console.log(`O ${this.type} atacou usando ${attack}`);
  }

}

let heroWarrior = new hero("Veigar", 420, "");

heroWarrior.attack();