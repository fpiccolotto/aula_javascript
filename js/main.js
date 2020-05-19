
function clicou()
{
    document.getElementById("agradecimento").innerHTML="<em>Obrigado por clicar</em>" 
}

function redirecionar()
{
    window.open("http://github.com/fpiccolotto/")
}

function trocar()
{
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse!"
}

function voltar()
{
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
}

function trocar(elemento)
{
    elemento.innerHTML="Obrigado por passar!"
}

function voltar(elemento)
{
    elemento.innerHTML="Passe o mouse aqui!"
}

function load()
{
    alert("Bem-vindo(a)! Página carregada.")
}

function funcaoChange(elemento)
{
    console.log(elemento.value)
}


/*
function sum(n1, n2) {
    return n1 + n2;
}


var validate = 0;

function validateAge(age) {
    
    if (age >= 18) {
        validate = true
    }else{
        validate = false
    }
    return validate
}

var age = prompt("How old are you?");
validateAge(age)
console.log(validate);
*/

/*
alert(sum(5, 10));
alert(setReplace("Go devs", "JS", "Brasil"));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for (cont=0; count <= 5; count++) {
    alert(count);
}
/*
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*var age = prompt("How old are you?");
if (age >= 18){
    alert("Welcome");
}else{
    alert("You must have at least 18 years old to proceed");
};
*/

/*
var fruits = [{name:"apple", color:"red"}, {name:"grape", color: "purple"}]
console.log(fruits);
alert(fruits[1].name);
*/

/*
var list = ["apple", "pear", "orange"];
list.push("grape");
list.pop();
*/

/*
console.log(list);
console.log(list.toString());
console.log(list.join(" - "));
*/

/*
var name = "Fernando Piccolotto";
var age = 37;
var n1 = 5;
var n2 = 4;
alert("Welcome " + name + " (" + age + " years" + ")");
console.log(name);
console.log(n1 * n2);
var phrase = "Thanks for this Digital Innovation One";
console.log(phrase.toUpperCase());
*/