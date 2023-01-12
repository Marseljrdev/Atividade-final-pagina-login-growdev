

function saveInput() {
    
    let descricao = document.getElementById('descricao').value;
    let detalhamento = document.getElementById('detalhamento').value;
    
    localStorage.setItem('descricao', JSON.stringify(descricao))
    localStorage.setItem('detalhamento', JSON.stringify(detalhamento))

    let description = document.getElementById('description');
    description.innerHTML = ""
    let detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = "";

    let countMais = 0;
    
    let count = document.getElementById('count');
    count.innerText = ''
    if(count){
        count.append(++countMais);
    }
    

    if( localStorage.detalhamento ) {
        detalhes.append(detalhamento);
    }

    if( localStorage.descricao ) {
        description.append(descricao);

    }




    document.getElementById('descricao').value = "";
    document.getElementById('detalhamento').value = "";

}

saveInput();



function removeItem() {

    localStorage.removeItem('descricao');
    localStorage.removeItem('detalhamento');

}

removeItem();
