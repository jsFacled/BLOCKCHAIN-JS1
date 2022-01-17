const Block = require("./block")
const Blockchain = require("./blockchain")

let cutreCoin = new Blockchain()
cutreCoin.agregarBloque(new Block("05/01/2022", {cantidad:10}))
cutreCoin.agregarBloque(new Block("06/01/2022", {cantidad:40}))
cutreCoin.agregarBloque(new Block("07/01/2022", {cantidad:1}))

console.log(cutreCoin.validarChain())

console.log(JSON.stringify(cutreCoin, null, 4))

// Para probar correr desde consola:  node app.js











