function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);
   
   /* Validação correta (Não funciona no Chrome pois não é possível acessar o localname) */
   // elemento && elemento.localname === 'audio' ? elemento.play() : console.log('Elemento não encontrado');
   elemento ? elemento.play() : console.log('Elemento não encontrado');
}

const listaTeclas = document.querySelectorAll('.tecla');
const listaSons = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idSom)
    };

    tecla.onkeydown = function (evento) {
        if (evento.code == 'Enter' || evento.code == 'Space') tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}