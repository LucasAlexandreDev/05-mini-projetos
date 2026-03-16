'use strict'

const validarIntervaloNumericoNota = function(nota1, nota2, nota3){

    if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10){
        return false
    }

    return true
}

const calcularMedia = function(){

    const notaAluno1 = document.getElementById('nota1')
    const notaAluno2 = document.getElementById('nota2')
    const notaAluno3 = document.getElementById('nota3')
    const resultado  = document.getElementById('resultado')

    let nota1 = Number(notaAluno1.value)
    let nota2 = Number(notaAluno2.value)
    let nota3 = Number(notaAluno3.value)
    let numeroInvalido = 'Não foi possível realizar o cálculo de Média. Digite apenas números válidos (0 até 10)'
    
    if(!validarIntervaloNumericoNota(nota1, nota2, nota3)){
        resultado.textContent = numeroInvalido
        return
    }

    let resultadoMedia = Number( (nota1 + nota2 + nota3) / 3 ).toFixed(2)
    let statusAluno

    removerClasses()

    if(resultadoMedia >= 7){
        statusAluno =  'Aprovado'
        resultado.textContent = `A média do Aluno(a) foi de: ${resultadoMedia} Status do Aluno(a): ${statusAluno}`
        resultado.classList.add('aprovado')

    }else if(resultadoMedia >= 5 && resultadoMedia < 7){
        statusAluno = 'Recuperação'
        resultado.textContent = `A média do Aluno(a) foi de: ${resultadoMedia} Status do Aluno(a): ${statusAluno}`
        resultado.classList.add('recuperacao')
    
    }else{
        statusAluno = 'Reprovado'
        resultado.textContent = `A média do Aluno(a) foi de: ${resultadoMedia} Status do Aluno(a): ${statusAluno}`
        resultado.classList.add('reprovado')
    }
}   

const removerClasses = function(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
}

