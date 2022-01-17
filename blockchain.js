const Block = require("./block")

class Blockchain {
    constructor(){
        this.chain =[this.crearBloqueGenesis()]
    }

    crearBloqueGenesis(){
        return new Block("04/01/2022", "Bloque genesis", "0"*64)

    }

    getUltimoBloque(){
        return this.chain[this.chain.length -1]
    }

    agregarBloque(nuevoBloque){
        nuevoBloque.hashPrevio=this.getUltimoBloque().hash
        nuevoBloque.hash = nuevoBloque.calcularHash()
        this.chain.push(nuevoBloque)
    }

    validarChain(){
        for(let i=1; i<this.chain.length; i++){
            const bloqueActual = this.chain[i]
            const bloqueAnterior = this.chain[i-1]

            if(bloqueActual.hash != bloqueActual.calcularHash()){
                return false
            }

            if(bloqueActual.hashPrevio != bloqueAnterior.hash){
                return false
            }
                
        }

        return true
    }




}





//Exporto éste módulo
module.exports = Blockchain
