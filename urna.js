function adicionarP(num){
    var numAtual = document.getElementById("numero").innerHTML
     document.getElementById("numero").innerHTML = numAtual + num


    if (numAtual.length == 1){
          let number = document.getElementById("numero").innerHTML = numAtual + num
          let count = 0 
          count++ 
          ///
          ///
           
          let foto = document.createElement("img")
          document.getElementById("contImg").innerText = ""
          document.getElementById("numero")
          //     nome e partido    ///
          let sobre = document.createElement("p")
          sobre.setAttribute("id", "idSobre")
          
          ////
          sobre.style.color = "black"
          sobre.style.marginLeft = "100px"
          sobre.style.fontSize = "12px"
          sobre.style.paddingBottom = "10px"
          document.getElementById("telaVotacao").appendChild(sobre)
       
        
          if (count == 1){   
          //candidato bolsonaro
          if (number == 22){
          foto.src = "imagens/bolsonaro.png"
          foto.style.width = "130px"
          foto.style.height = "130px"
          foto.style.objectFit = "cover"
          foto.style.borderRadius = "60px"
          ///
          sobre.textContent = "Candidato: Jair Bolsonaro  -  Partido: PL"
          ///
          document.getElementById("contImg").appendChild(foto)
          
          
          //candidato lula
          } else if (number == 13){
            foto.src = "imagens/lula.png"
            foto.style.width = "130px"
            foto.style.height = "130px"    
            foto.style.objectFit = "cover"
            foto.style.borderRadius = "100px"
           
            ///
            sobre.innerHTML = "Candidato: LULA  -  Partido: PT"
            ///
            document.getElementById("contImg").appendChild(foto)

            
            } else if (number == 12){
              //candidato ciro gomes
              foto.src = "imagens/ciro.png"
              foto.style.width = "130px"
              foto.style.height = "130px"
              foto.style.objectFit = "cover"
              foto.style.borderRadius = "100px"

             
              ///
              sobre.innerHTML = "Candidato: Ciro Gomes  -  Partido: PDT"
              ///
              document.getElementById("contImg").appendChild(foto)


              //candidata simone tebet 
            } else if (number == 15){
              foto.src = "imagens/simone.png"
              foto.style.width = "130px"
              foto.style.height = "130px"
              foto.style.objectFit = "cover"
              foto.style.borderRadius = "100px"
             
              
              ///
              sobre.innerHTML = "Candidata: Simone Tebet  -  Partido: MDB"
              ///
              document.getElementById("contImg").appendChild(foto)


              //candidata soraia 
            } else if (number == 44){
              foto.src = "imagens/soraia.png"
              foto.style.width = "130px"
              foto.style.height = "130px"
              foto.style.objectFit = "cover"
              foto.style.borderRadius = "60px"

              
              ///
              sobre.innerHTML = "Candidata: Soraia Thronicke -  Partido: União Brasil"
              ///
              document.getElementById("contImg").appendChild(foto)
            }
            

            ///
            //checando se o numero digitado pertence a algum candidato
            let numeros = [12,13,15,22,44]
            let status = true

          for(var i=0; i<numeros.length; i++){  
          var valor = numeros[i];  
          if(valor == number){  
            return status
          }
          
        }
    //se a condição for verdadeira (true) o numero não pertence a um candiato o voto será dado como nulo
    if (status){
      sobre.innerHTML = "VOTO NULO"
      foto.src = "https://www.oncoensino.org/wp-content/uploads/2023/10/default_user_icon-center-bottom-100x100.jpg"
      document.getElementById("contImg").appendChild(foto)
   
     }
    
          }    
          
        }

        
    if (numAtual.length == 2){
      window.alert("Nesta votação são permitidos apenas dois digitos!")
      document.getElementById("numero").innerText = ""
      document.getElementById("contImg").innerText = ""
      let remover = document.getElementById("idSobre")
      remover.remove()
       

      ///// adicionar novamente a foto 'icon anonimo'
    let foto = document.createElement("img")
    foto.src = "https://www.oncoensino.org/wp-content/uploads/2023/10/default_user_icon-center-bottom-100x100.jpg"
    foto.style.width = "100px"
    foto.style.height = "100px"
    document.getElementById("contImg").appendChild(foto)
    //


    }
        
     }
    
//////////////////////

function corrigir(){
  let sobre = document.getElementById("idSobre")


   
   if (!sobre){
    document.getElementById("numero").innerText = ""
   
   } else{
  

    document.getElementById("numero").innerText = ""
    document.getElementById("contImg").innerText = ""
    let remover = document.getElementById("idSobre")
    remover.remove()

    ///// criar dinamicamente 
    let foto = document.createElement("img")
    foto.src = "https://www.oncoensino.org/wp-content/uploads/2023/10/default_user_icon-center-bottom-100x100.jpg"
    foto.style.width = "100px"
    foto.style.height = "100px"
    document.getElementById("contImg").appendChild(foto)
    //
    var bts = document.getElementsByClassName("bts");
        for (var i=0; i < bts.length; i++) {
          bts[i].disabled = false
        }


   
   }


}


//////
function votarBranco(){
      let desc = document.getElementById("idSobre")
    
      if (!desc){

        let sobre = document.createElement("p")
        sobre.setAttribute("id", "idSobre")
        sobre.style.color = "black"
        sobre.style.marginLeft = "100px"
        sobre.innerHTML = "VOTO BRANCO"
        sobre.style.fontSize = "12px"
        document.getElementById("telaVotacao").appendChild(sobre)
        let num = document.getElementsByTagName("button")
        num.ariaDisabled = true
      
        /// desabilita os botoes numéricos da urna ao selecionar 'voto branco' 
       
        var bts = document.getElementsByClassName("bts");
        for (var i=0; i < bts.length; i++) {
          bts[i].disabled = true
        }
        
        document.getElementById("numero").innerHTML = ""
        
        }
   
}


//////////////

function confirmar(){
    let sobre = document.getElementById("idSobre")


    //condição para exibir uma mensagem de erro quando o campo esta em branco ou são inseridos digitos insuficientes 
    //menores que dois (2)
  if (!sobre){
    alert("Campo em branco ou digitos insuficientes! Insira um número válido")
    corrigir()
   } else {
corrigir()
///
document.getElementById("miniCont").remove()
document.getElementsByTagName("h1")[0].remove()
document.getElementById("contImg").remove()
let telaFim = document.getElementById("telaVotacao")
telaFim.innerHTML = "FIM"
telaFim.style.fontSize = "200px"
telaFim.style.fontFamily = "Arial", "Helvetica Neue", "Helvetica", "sans-serif"



///// bloqueio do botão 'branco' e 'corrige' ao finalizar o voto 

let btBranco = document.getElementById("branco")
let btCorrige = document.getElementById("corrige")
let btConfirma = document.getElementById("confirma")
btBranco.disabled = true
btCorrige.disabled = true
btConfirma.disabled = true


}
//

let audio = new Audio("audio/confirma-urna_.MP3")
audio.play()

}

function refresh(){
  location.reload()
    
}
