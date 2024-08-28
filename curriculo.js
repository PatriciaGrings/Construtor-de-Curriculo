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
