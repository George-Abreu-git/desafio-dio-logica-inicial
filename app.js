let heroi = "Darius";
let nivelHeroi = 1;


if (nivelHeroi < 1000 && nivelHeroi >0) {
    console.log("O herói " + heroi + "está no rank Ferro")
} else if (nivelHeroi > 1000 && nivelHeroi <= 2000) {   
     console.log("O herói " + heroi + "está no rank Bronze")
} else  if (nivelHeroi > 2000 && nivelHeroi <= 5000) {
    console.log("O herói " + heroi + "está no rank Prata")
} else if  (nivelHeroi > 5000 && nivelHeroi <= 6000) {
    console.log("O herói " + heroi + "está no rank Ouro")
} else if  (nivelHeroi > 6000 && nivelHeroi <= 7000) {
    console.log("O herói " + heroi + "está no rank Platina")
} else if  (nivelHeroi > 7000 && nivelHeroi <= 8000) {
    console.log("O herói " + heroi + "está no rank Diamante")
} else if  (nivelHeroi > 8000 && nivelHeroi <= 9000) {
    console.log("O herói " + heroi + "está no rank Ascendente")
} else if  (nivelHeroi > 9000 && nivelHeroi <= 10000) {
    console.log("O herói " + heroi + "está no rank Imortal")
} else if  (nivelHeroi > 11000) {
    console.log("O herói " + heroi + "está no rank Radiante")
} else {
    console.log("O herói "+ heroi + " está sem rank")
}