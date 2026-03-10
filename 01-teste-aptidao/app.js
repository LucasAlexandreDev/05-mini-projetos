'use strict'

const validarNulo = function(campo){
    
    if(campo === undefined || campo === null){
        return false
    }

    if(validarNulo(campo)){
        return false
    }

    if(String(campo).trim()=== ''){
        return false
    }
     
    return true 
}

const validarNumero = function(n1){
    
    if(!validarNulo(n1)){
        return false
    }

    let numero1 = Number(n1)

    if(isNaN(numero1)){
        return false
    }

    return true

}

const avaliar = function(){
    
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')

    removerClasses()
    
    if(tempo.value <= 14){
       resultado.textContent = 'Apto'
       resultado.classList.add('apto')

    }else{
        resultado.textContent = 'Não Apto'
        resultado.classList.add('nao-apto')
    }
}

const removerClasses = function(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('apto', 'nao-apto')


}
