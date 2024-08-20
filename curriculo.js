window.prompt(Digite)

// Função para alternar a visibilidade dos campos
function toggleField(radio, fieldId) {
    const field = document.getElementById(fieldId);
    if (radio.value === 'nao') {
        field.style.display = 'none';
    } else {
        field.style.display = 'block';
    }
}

// Adicionando eventos de clique nos radios
document.getElementById('portSim').addEventListener('click', function() {
    toggleField(this, 'portfolioInput');
});
document.getElementById('portNao').addEventListener('click', function() {
    toggleField(this, 'portfolioInput');
});

document.getElementById('idiomasSim').addEventListener('click', function() {
    toggleField(this, 'idiomasInput');
});
document.getElementById('idiomasNao').addEventListener('click', function() {
    toggleField(this, 'idiomasInput');
});

// Função para salvar os dados no localStorage
function saveData() {
    const data = {
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        linkedin: document.getElementById('linkedin').value,
        portfolio: document.getElementById('portfolioInput').value,
        idiomas: document.getElementById('idiomasInput').value,
        conhecimentos: document.getElementById('conhecimentosInput').value,
        nomeSobrenome: document.getElementById('nomeSobrenome').value,
        cargo: document.getElementById('cargo').value,
        sobreMim: document.getElementById('sobreMimInput').value,
        perfilAcademico: document.getElementById('perfilAcademicoInput').value,
        experiencia: document.getElementById('experiencia').innerHTML,
    };
    localStorage.setItem('curriculoData', JSON.stringify(data));
}

// Função para carregar os dados do localStorage
function loadData() {
    const data = JSON.parse(localStorage.getItem('curriculoData'));
    if (data) {
        document.getElementById('telefone').value = data.telefone;
        document.getElementById('email').value = data.email;
        document.getElementById('linkedin').value = data.linkedin;
        document.getElementById('portfolioInput').value = data.portfolio;
        document.getElementById('idiomasInput').value = data.idiomas;
        document.getElementById('conhecimentosInput').value = data.conhecimentos;
        document.getElementById('nomeSobrenome').value = data.nomeSobrenome;
        document.getElementById('cargo').value = data.cargo;
        document.getElementById('sobreMimInput').value = data.sobreMim;
        document.getElementById('perfilAcademicoInput').value = data.perfilAcademico;
        document.getElementById('experiencia').innerHTML = data.experiencia;
    }
}

// Salvar dados quando o usuário sair da página ou recarregar
window.addEventListener('beforeunload', saveData);

// Carregar os dados quando a página for carregada
window.onload = loadData;