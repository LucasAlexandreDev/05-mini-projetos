'use strict'

const calcularDesconto = function(){

    const precoInicial = document.getElementById('preco')
    const percentualDesconto = document.getElementById('desconto')
    let resultado = document.getElementById('resultado')

    let valorDesconto = precoInicial.value * (percentualDesconto.value / 100)
    let precoComDesconto = precoInicial.value - valorDesconto

    removerClasses()

    if(percentualDesconto.value <= 5){
        resultado.textContent = precoComDesconto
        resultado.classList.add('valor-percentual-cinco')
    
    }else if(percentualDesconto.value > 5 && percentualDesconto.value <= 10){
        resultado.textContent = precoComDesconto
        resultado.classList.add('valor-percentual-cinco-ate-dez')
    
    }else if(percentualDesconto.value > 10){
        resultado.textContent = precoComDesconto
        resultado.classList.add('valor-percentual-acima-dez')
    }
}


const removerClasses = function(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('valor-percentual-cinco', 'valor-percentual-cinco-ate-dez', 'valor-percentual-acima-dez')


}