var contPort = 0
var contIdi = 0
function addPort() {
    var TPC= document.getElementById('tPortContainer')
    var TexPC= document.getElementById('textoPortContainer')
    if (contPort==0) {
        var novoPortTitulo = document.createElement('div')
        novoPortTitulo.innerHTML= '<h3>Porfólio</h3>'
        TPC.appendChild(novoPortTitulo)
    }

        var novoPortTexto = document.createElement('div')
        novoPortTexto.setAttribute ('contenteditable', 'true')
        novoPortTexto.innerHTML= '<p id="textoDados">www.portfolio.com.br</p>'

        TexPC.appendChild(novoPortTexto)
        
    contPort += 1
}

function addIdioma() {
    var TIC= document.getElementById('tIdiomaContainer')
    var TexIC= document.getElementById('texIdiomaContainer')

    if (contIdi==0) {
        var novoIdiomaTitulo = document.createElement('div')
        novoIdiomaTitulo.innerHTML= '<h3>Idiomas</h3>'
        TIC.appendChild(novoIdiomaTitulo)
    }
    contIdi += 1

    var novoIdiomaTexto= document.createElement('div')
    novoIdiomaTexto.setAttribute('contenteditable', 'true')
    novoIdiomaTexto.innerHTML= '<p id="textoDados" class="bulletD">Idioma - Nível de Conhec.</p>'
    
    TexIC.appendChild(novoIdiomaTexto)
}

function perfil (){
    var novoPerfil = document.createElement('div')
    novoPerfil.setAttribute('contenteditable', 'true')
    
    novoPerfil.innerHTML = `
        <p id="f12" class="topo">Instituição</p>
        <p id="f11">Data de Início - Data de Conclusão</p>
        <p id="f14">Curso</p></br>  
    `
    document.getElementById('perfilContainer').appendChild(novoPerfil)
}
function exper(){
    var novaExperiencia = document.createElement('div')
    novaExperiencia.setAttribute('contenteditable', 'true')
    
    novaExperiencia.innerHTML = `
        <p id="f12">Data de Entrada - Data de Saída</p>
        <p id="f12">Empresa</p>
        <p id="f14">Cargo</p>
        <p id="f11" class="bullet">Descrição das atividades desempenhadas no cargo</p></br>  
    `
    document.getElementById('experienciaContainer').appendChild(novaExperiencia)
}

function botãoVideo(videoID,fecharID){
    var video= document.getElementById(videoID)
    var fechar= document.getElementById(fecharID)
    
    video.style.display = 'block'
    fechar.onclick = function() {
        video.style.display = 'none'
    }
}

var escolhaIdioma = document.getElementById(idis).checked
var retirarIdioma = document.getElementById(retirarIdioma)
if (escolhaIdioma){
    retirarIdioma.style.display='block'
}
else{
    retirarIdioma.style.display='none'
}

var escolhaPortfolio = document.getElementById(ports).checked
var retirarIdioma = document.getElementById(retirarPortfolio)
if (escolhaPortfolio){
    retirarPortfolio.style.display='block'
}
else{
    retirarPortfolio.style.display='none'
}

