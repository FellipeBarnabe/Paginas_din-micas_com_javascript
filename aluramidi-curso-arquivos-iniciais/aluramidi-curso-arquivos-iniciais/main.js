function tocaMidi(idElementAudio){
    document.querySelector(idElementAudio).play()

}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contator = 0;

while(contador < listaDeTeclas.length){
listaDeTeclas[contator].onclick = tocaMidi;
    contator = contador +1;
listaDeTeclas[1].onclick =  idElementAudio;  

}


/* listaDeTeclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
      // Pega a segunda classe (ex: tecla_pom)
      const instrumento = tecla.classList[1];
      // Monta o id do áudio (ex: som_tecla_pom)
      const idAudio = `#som_${instrumento}`;
      const audio = document.querySelector(idAudio);

      if (audio) {
        audio.currentTime = 0; // volta o áudio pro início
        audio.play();          // toca o som
      }
    });
  }); */
  

