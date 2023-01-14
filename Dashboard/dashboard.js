

/*  function saveInput() {

    let descricao = document.querySelector('#descricao');
    let detalhamento = document.querySelector('#detalhamento');
    
    
    
    let data = JSON.parse(localStorage.getItem('data') || '[]');
    
    data.push({
        descricao: descricao.value,
        detalhamento: detalhamento.value
    })
    
    localStorage.setItem('data', JSON.stringify(data));
    
    
    
    
    document.getElementById('descricao').value = "";
    document.getElementById('detalhamento').value = "";  
    
    
    
} 
*/
/* document.addEventListener('DOMContentLoaded', (e) => {

   e.preventDefault();
   
   mostrarLinha()
   
   
   
})
 */
let btn = document.getElementById('btn-sub');

btn.addEventListener('click', () => {

    let descricao = document.querySelector('#descricao');
    let detalhamento = document.querySelector('#detalhamento');
    
    
    
    let data = JSON.parse(localStorage.getItem('data') || '[]');
    
    data.push({
        descricao: descricao.value,
        detalhamento: detalhamento.value
    })
    
    localStorage.setItem('data', JSON.stringify(data));

    
    let mostrar = document.getElementById('mostrarLinha');
    mostrar.innerHTML = '';
    
    let getData = JSON.parse(localStorage.getItem('data'));
    
    
    
        
        getData.forEach((valor, index, array) => {
               mostrar.innerHTML += `
               <tr>
                   <td data-label="#" id="count">${index + 1}</td>
                   <td data-label="Descricao" id="description">${valor.descricao}</td>
                   <td data-label="Detalhamento" id="detalhes" >${valor.detalhamento}</td>
                   <td data-label="Acao" >
                   <button type="submit" id="btn-apagar" onclick="removeItem()">Apagar</button>
                   <button type="submit" id="btn-edit" >Editar</button>
                   </td>
               </tr> 
               `
               
           }); 

    
    document.getElementById('descricao').value = "";
    document.getElementById('detalhamento').value = "";  
    
})





let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#h1');

logado.innerHTML = `Lista de recados: ${userLogado.nome}`;


if(localStorage.getItem('token') === null){
    alert('Você precisar estar logado para acessar essa página');
    window.location.href='../SignIn/login.html';
}
if(userLogado.email == '' || userLogado.senha == '') {
    alert("Você precisar estar logado para acessar essa página")
    window.location.href = '../SignIn/login.html';

}


function sair(){
    localStorage.removeItem('data');
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href='../SignIn/login.html';
}
