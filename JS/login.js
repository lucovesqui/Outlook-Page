let tk = localStorage.getItem("token")
const api = document.getElementById("finalspace")

if(tk){
    api.style.display = 'block';
}

document.querySelector(".botaolog").addEventListener("click", function (){
    let entrar = document.querySelector(".entrar");
    entrar.style.display = 'block';
})

document.querySelector(".btnfechar").addEventListener("click", function (){
    let entrar = document.querySelector(".entrar");
    entrar.style.display = 'none';
})

document.querySelector(".btnentrar").addEventListener("click", function (){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    if(email.length < 3 || senha.length < 3){
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
        alert("Email e senha devem ter mais de 3 caracteres!");
        let entrar = document.querySelector(".entrar");
        entrar.style.display = 'none';
    }else{
        axios.post('https://reqres.in/api/login', {
        email: email,
        password: senha
    })
    .then(function (response) {
        localStorage.setItem('token', response.data.token);
        let entrar = document.querySelector(".entrar");
        entrar.style.display = 'none';
        api.style.display = 'block';
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
        alert("Login realizado com sucesso!")
    })
    .catch(function(err){
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
        alert("Usuário não encontrado!")
    })
    }
    
})

