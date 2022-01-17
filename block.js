const SHA256 = require("crypto-js/sha256")



class Block {
    constructor(timestamp, data, hashPrevio=""){
        this.timestamp = timestamp
        this.data = data
        this.hashPrevio = hashPrevio
        this.hash = this.calcularHash()
        
    }

    calcularHash(){
        return SHA256(this.timestamp + this.hashPrevio + JSON.stringify(this.data)).toString()
    }
}

// Exporto éste módulo 
module.exports = Block
