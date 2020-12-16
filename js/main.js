/*---------------Roteiro JavaScript-----------------*/

//alert
//alert("meu primeiro js");


//----------------------------------------------//
//variaveis
//exemplo 1
// var nome = "Bruna Pires";
// alert("Bem vindo " + nome);

//exemplo 2
// var nome = "Bruna Pires";
// var idade = 32;
// alert(nome + " tem " + idade + " anos");

//exemplo 3 - soma
// var nome = "Bruna Pires";
// var idade1 = 32;
// var idade2 = 10;
// alert(nome + " tem " + (idade1 + idade2) + " anos");


//----------------------------------------------//
//console
// var nome = "Bruna Pires";
// var idade1 = 32;
// var idade2 = 10;
// console.log(nome);
// console.log(idade1 + idade2);


//----------------------------------------------//
//replace
// var nome = "Bruna Pires";
// var idade1 = 32;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// console.log(nome);
// console.log(idade1 + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// alert(frase.replace("Japão", "Brasil"));


//----------------------------------------------//
//toUpperCase
// var nome = "Bruna Pires";
// var idade1 = 32;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// console.log(nome);
// console.log(idade1 + idade2);
// console.log(frase.toUpperCase ("Japão", "Brasil"));


//----------------------------------------------//
//toLowerCase
// var nome = "Bruna Pires";
// var idade1 = 32;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// console.log(nome);
// console.log(idade1 + idade2);
// console.log(frase.toLowerCase ("Japão", "Brasil"));


//----------------------------------------------//
//Array
// var lista = ["maçã", "pêra", "laranja"];
// console.log(lista);

// //exemplo imprimi só a pêra
// var lista = ["maçã", "pêra", "laranja"];
// console.log(lista[1]);
// alert(lista[1]);

//push (inserir novo item)
// var lista = ["maçã", "pêra", "laranja"];
// lista.push("uva");
// console.log(lista);
// alert(lista);

//pop (retirar último item da lista)
// var lista = ["maçã", "pêra", "laranja"];
// lista.pop();
// console.log(lista);
// alert(lista);

//length (verificar a qnt de elementos da lista)
// var lista = ["maçã", "pêra", "laranja"];
// console.log(lista.length);

//reverse (reverter a ordem dos elementos da lista)
// var lista = ["maçã", "pêra", "laranja"];
// console.log(lista.reverse());

//toString(perde a referência de array)
// var lista = ["maçã", "pêra", "laranja"];
// console.log(lista);
// console.log(lista.toString());

//join(inserir item entre os itens)
// var lista = ["maçã", "pêra", "laranja"];
// console.log(lista);
// console.log(lista.join(" - "));


//----------------------------------------------//
//Dicionário
// var fruta = {nome:"maçã", cor:"vermelha"};
// console.log(fruta.nome);
// alert(fruta.cor);

//Exemplo - lista de discionário
// var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
// console.log(frutas);
// alert(frutas[1].nome);

//----------------------------------------------//
//condicionais if - else
// var idade = prompt("Qual sua idade?");
// if(idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// };


//----------------------------------------------//
//laço de repetição while
// var count = 0;
// while (count <= 5){
//     console.log(count);
//     count = count + 1;
//     alert(count);
// };


//----------------------------------------------//
//laço de repetição for
// var count;
// for(count=0; count <= 5; count++){
//     alert(count);
// };


//----------------------------------------------//
// Date
// var d = new Date();
// alert(d);
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getMonth());


//----------------------------------------------//
// function
// function soma(n1,n2){
//     return n1 + n2;
// }
// alert(soma(5,10));

// function com Replace
function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));


// function 
function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar (nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));