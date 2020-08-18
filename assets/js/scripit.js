

/* 
Case Sensitive = reconhecer letras maiusculas e minusculas

por tag: getElementByTagName()
por Id: getElementById()
por nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let sugestao = document.querySelector('#sugestao');

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
   let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"   
        txt.style.color = 'red' 
    } else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
    }
}
 
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@')==-1 || email.value.indexOf('.')) {
        txtEmail.innerHTML = "E-mail Inválido"   
        txtEmail.style.color = 'red' 
    } else {
        txt.innerHTML = "E-mail Válido"
        txt.style = "green"

}