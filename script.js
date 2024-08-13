// const cor0 = document.getElementById('0-cor');
// const cor1 = document.getElementById('1-cor');
// const cor2 = document.getElementById('2-cor');
// const cor3 = document.getElementById('3-cor');
// const cor4 = document.getElementById('4-cor');
// const tamanho0 = document.getElementById('0-tamanho');
// const tamanho1 = document.getElementById('1-tamanho');
// const imagem0 = document.getElementById('0-imagem');
// const imagem1 = document.getElementById('1-imagem');
// const imagem2 = document.getElementById('2-imagem');
// const imgVisualizacao = document.getElementById('imagem-visualizacao');


// imagem0.addEventListener('click', () => {
    //     imgVisualizacao.setAttribute('src', caminhoImagens + 'imagens-azul-inverno/imagem-0.jpeg');
    // });
    
const imagem0 = document.getElementById('0-imagem-miniatura');
const imagem1 = document.getElementById('1-imagem-miniatura');
const imagem2 = document.getElementById('2-imagem-miniatura');

const imagem0i = document.getElementById('0-imagem');
const imagem1i = document.getElementById('1-imagem');
const imagem2i = document.getElementById('2-imagem');

const imagemGrande = document.getElementById('imagem-visualizacao');
const corNome = document.getElementById('nome-cor-selecionada');
const titulo = document.getElementById('titulo-produto');

let caminhoImagens = './imagens/opcoes-cores/';
let cor;

function trocaCor(id) {
    switch(id) {
        case "0-cor":
            cor = "imagens-verde-cipreste/";
            corNome.textContent = 'Cor - Verde Cipreste'
            trocarMiniaturas(cor);
            break;
        case "1-cor":
            cor = "imagens-azul-inverno/";
            trocarMiniaturas(cor);
            corNome.textContent = 'Cor - Azul Inverno'
            break;
        case "2-cor":
            cor = "imagens-meia-noite/";
            corNome.textContent = 'Cor - Meia Noite'
            trocarMiniaturas(cor);
            break;
        case "3-cor":
            cor = "imagens-estelar/";
            corNome.textContent = 'Cor - Estelar'
            trocarMiniaturas(cor);
            break;
        case "4-cor":
            cor = "imagens-rosa-claro/";
            corNome.textContent = 'Cor - Rosa Claro'
            trocarMiniaturas(cor);
            break;
    }
}

function trocarMiniaturas(caminhoCor) {
    imagem0.setAttribute('src', caminhoImagens + caminhoCor + 'imagem-0.jpeg');
    imagem1.setAttribute('src', caminhoImagens + caminhoCor + 'imagem-1.jpeg');
    imagem2.setAttribute('src', caminhoImagens + caminhoCor + 'imagem-2.jpeg');

    imagemGrande.setAttribute('src', caminhoImagens + caminhoCor + 'imagem-1.jpeg');
    imagem1i.checked = true;
    imagem0i.checked = false;
    imagem2i.checked = false;
}

function trocarImagem(id) {
    let idCerto = document.getElementById(id);
    let caminho = idCerto.getAttribute('src');
    imagemGrande.setAttribute('src', caminho);
}

function trocarTamanho(id) {
    if (id == "0-tamanho") {
        titulo.textContent = 'Pulseira loop esportiva azul-inverno para caixa de 41 mm'
    }
    else {
        titulo.textContent = 'Pulseira loop esportiva azul-inverno para caixa de 45 mm'
    }
}
