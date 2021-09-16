// export default class Senha{
//   constructor (local){
//     this.local = local
    
//     this.arrayMaiusculo =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     this.arrayMinusculo = 'abcdefghijklmnopqrstuvwxyz'
//     this.numeros = '0123456789'
//     this.simbolos = '@#$%¨&*()+_-=/*,[]{}´´``~^;:.>,<º/?°'
//   }
//   imprimeLocal(text){
//     this.local.innerHTML += `
//       <span>${text}</span>
//     `
//   }
//   rand(min,max) {
//     return Math.floor(Math.random() * (max-min) + min)
//   }
//   limpa(){
//     this.local.innerHTML = ''
//   }

//   retornaDados(){
//     return{
//      addNumber: this.addNumber = document.querySelector('.addNumber'),
//      maiuscula: this.maiuscula = document.querySelector('.maiuscula'),
//      minuscula: this.minuscula = document.querySelector(".minuscula"),
//      qtde: this.caracteres = document.querySelector('.qtde').value,
//      simbolos: this.simbolosELetras = document.querySelector(".simbolosLetras")
//     }
//   }

//   inicia(){
//     this.limpa()
//     const dados = this.retornaDados()

//     const array = this.retornaArray()

//     for(let i = 0;i<dados.qtde;i++){
//       const alearorio = this.rand(0, array.length)
//       const letra = array[alearorio]
//       this.imprimeLocal(letra)
//     }
//   }
  
  
//   retornaArray(){
//     const dados = this.retornaDados()

//     let array = []
//     if(dados.addNumber.checked === true) array +=  this.numeros
//     if(dados.maiuscula.checked === true) array +=   this.arrayMaiusculo
//     if(dados.minuscula.checked === true) array +=   this.arrayMinusculo
//     if(dados.simbolos.checked === true) array +=   this.simbolos

//     return array
//   }


// } 

