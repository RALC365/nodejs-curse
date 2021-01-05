const {frutas,dinero} = require('./frutas.js')
var cowsay = require("cowsay")

frutas.forEach(item => {
    console.count(item)
});

console.log(dinero)

console.log(cowsay.say({
    text: "Hola amigos de Bluweb",
    e: "oO",
    T: "U "

}));