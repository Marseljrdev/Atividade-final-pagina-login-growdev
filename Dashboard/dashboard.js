

function saveInput() {

    let descricao = document.querySelector('#descricao');
    let detalhamento = document.querySelector('#detalhamento');

    
    
    let description = document.querySelector('#description');
    let detalhes = document.querySelector('#detalhes');

    let count = document.querySelector('#count');
    let countMais = 1;
    
    let data = JSON.parse(localStorage.getItem('data') || '[]');
    
    data.push({
        descricao: descricao.value,
        detalhamento: detalhamento.value
    })

    localStorage.setItem('data', JSON.stringify(data));

    data.forEach((item) => {
        if(item.descricao && item.detalhamento){
            description.innerHTML = item.descricao
            detalhes.innerHTML = item.descricao
        }

    });

    count.innerHTML = countMais++
    
    
    document.getElementById('descricao').value = "";
    document.getElementById('detalhamento').value = "";

}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#h1');

logado.innerHTML = `Lista de recados: ${userLogado.nome}`;

if(localStorage.getItem('token') === null){
    alert('voce precisa estar logado');
    window.location.href='../SignIn/login.html';
}

function sair(){
    localStorage.removeItem('token');
    window.location.href='../SignIn/login.html';
}