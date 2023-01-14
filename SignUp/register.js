

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let senha = document.querySelector('#password');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;


let msgSuccess = document.querySelector('#msgSuccess');
let msgError = document.querySelector('#msgError');


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red;');
        validNome = false;
        
    }else{
        labelNome.setAttribute('style', 'color: #181c2e;');
        validNome = true;
    }
});

email.addEventListener('keyup', ()=> {
    if(email.value.length <= 5){
        labelEmail.setAttribute('style', 'color: red;')
        validEmail = false;
    }else{
        labelEmail.setAttribute('style', 'color: #181c2e;')
        validEmail = true;
    }
});

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 6){
        labelSenha.setAttribute('style', 'color: red;');
        validSenha = false;
    }else{
        labelSenha.setAttribute('style', 'color: #181c2e;');
        validSenha = true;
    }
    
});


function cadastrar(){
    if(validNome && validEmail && validSenha){
         let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            nomeUser: nome.value,
            emailUser: email.value,
            senhaUser: senha.value
        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));
        window.location.href="../SignIn/login.html" ;

        alert('Cadastrado com sucesso');

        // console.log(listaUser);
        // alert('cadastrou');
    }else{
        alert('erro')
    }
}




