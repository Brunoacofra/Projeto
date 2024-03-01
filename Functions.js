
let btn = document.getElementById('btn')
let name = document.getElementById('nome')
let mensagem = document.getElementById('mensagem')
let email = document.getElementById('email')
var form = document.querySelector('btn');
let msg = document.getElementsByClassName("texto")
function nameverifica(){
	if (name.value == 0){
		name.setAttribute("style" , "border-color:red")
		msg[0].setAttribute("style","display:block")
	}else
	{
		name.setAttribute("style" ,  "border-color:green")
		msg[0].setAttribute("style","display:none")
	}
}
function emailverifica(){
	if (email.value == 0){
		email.setAttribute("style" , "border-color:red")
		msg[1].setAttribute("style","display:block")
	}else
	{
		email.setAttribute("style" ,  "border-color:green")
		msg[1].setAttribute("style","display:none")
	}
}
function mensagemverifica(){
	if (mensagem.value == 0){
		mensagem.setAttribute("style" , "border-color:red")
		msg[2].setAttribute("style","display:block")
	}else
	{
		mensagem.setAttribute("style" ,  "border-color:green")
		msg[2].setAttribute("style","display:none")
	}
}
btn.onclick = function (){
	nameverifica();
	emailverifica();
	mensagemverifica();
}