'use strict'

// const calcularDesconto = function(){

//     const precoInicial = document.getElementById('preco')
//     const percentualDesconto = document.getElementById('desconto')
//     let resultado = document.getElementById('resultado')

//     let valorDesconto = precoInicial.value * (percentualDesconto.value / 100)
//     let precoComDesconto = precoInicial.value - valorDesconto

//     removerClasses()

//     if(percentualDesconto.value <= 5){
//         resultado.textContent = precoComDesconto
//         resultado.classList.add('valor-percentual-cinco')
    
//     }else if(percentualDesconto.value > 5 && percentualDesconto.value <= 10){
//         resultado.textContent = precoComDesconto
//         resultado.classList.add('valor-percentual-cinco-ate-dez')
    
//     }else if(percentualDesconto.value > 10){
//         resultado.textContent = precoComDesconto
//         resultado.classList.add('valor-percentual-acima-dez')
//     }
// }


// const removerClasses = function(){
//     const resultado = document.getElementById('resultado')
//     resultado.classList.remove('valor-percentual-cinco', 'valor-percentual-cinco-ate-dez', 'valor-percentual-acima-dez')


// }

// const calcularValorEconomizado = function(preco, desconto){
//     return preco * desconto / 100
// }

// const calcularPrecoFinal = function(preco, valorEconomizado){
//     return preco - valorEconomizado
// }

// ---------------- FORMA COM FUNÇÕES PURAS ----------------//

const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100

const calcularPrecoFinal= (preco, valorEconomizado) => preco - valorEconomizado

const selecionarCor = function(desconto){

    if(desconto <= 5){
        return 'desconto1'
        
    }else if(desconto <= 10){
        return 'desconto2'

    }else{
        return 'desconto3'
    }
}

const handleClick = function(){
    
    let preco     = Number( document.getElementById('preco').value )
    let desconto  = Number( document.getElementById('desconto').value )
    let resultado = document.getElementById('resultado')

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal       = calcularValorEconomizado(preco, valorEconomizado)
    const cor              = selecionarCor(desconto)

    resultado.textContent = `${valorEconomizado} |-----| ${precoFinal}`
    limparclasses()
    resultado.classList.add(cor)
}

const limparclasses = function(){
    document.getElementById('resultado').classList.remove('desconto1', 'desconto2', 'desconto3')
}

