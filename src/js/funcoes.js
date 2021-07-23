document.getElementsByName('btnCopiarRSS')[0].addEventListener('click',copiarFeedRSS);

function mostrarCopyrightNoRodapé() {
    var paragrafo = document.querySelector('footer p#copyright');
    var ano = new Date();
    ano = String(ano.getFullYear());
    ano = ano.slice(2);

    paragrafo.innerHTML = `&copy; 2008-${ano} - Equipe Earthbound Brasil`;
}

// Autoload
function autoload() {
    mostrarCopyrightNoRodapé();
}
function copiarFeedRSS() {
    let barra = document.getElementsByName('rss')[0];
    barra.select();
    document.execCommand('copy');
    alert("Feed RSS copiado para a area de transferência");
}
//Algumas funções de carregamento pro DOM
window.document.body.onload = autoload;