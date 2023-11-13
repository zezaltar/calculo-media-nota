const form = document.getElementById('form-atividade');
const imgaprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgreprovado = '<img src="./images/reprovado.png" alt="emoji descepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado!</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado!</span>'
const notaMinima = parseFloat(prompt('Digite a Nota Minima:'));

let linhas = "";

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizartabela();
    atualizamediafinal();
});

function adicionalinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    
    if(atividades.includes(inputNomeAtividade.value)){
    alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else{

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgaprovado : imgreprovado} </td>`;
    linha += '</tr>';
    linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.valeu = '';
    
}

function atualizartabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizamediafinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediafinalvalor').innerHTML = mediaFinal;
    document.getElementById('mediafinalresultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somadasnotas = 0;

    for (let i = 0; i< notas.length;i++){
    somadasnotas += notas[i];
    }

    return somadasnotas / notas.length;
}