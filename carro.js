let yCarros = [40, 96, 150,210,270,318];
let velocidadeCarros = [9, 6.5, 3.4,5, 6.8,5.3];
let xCarros = [600, 600, 600,600, 600,600]
let comprimentoCarro = 50;
let alturaCarro = 40

function mostraCarro(){
  for(i=0; i<imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i],yCarros[i], comprimentoCarro, alturaCarro)
  
  }  
}

function movimentaCarro(){
  for(i=0; i < velocidadeCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
  
}

function voltaCompletadoCarro(){
  for(i=0; i< imagemCarros.length; i++){
    
    if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600
  }
    
  }
}

function passouTodaATela(xCarro){
  return xCarro <-50;
}