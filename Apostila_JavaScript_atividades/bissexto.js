/*Função que detecta se o ano fornecido 
é um ano bissexto ou não. Anos bissextos são divisíveis 
por 4, mas não por 100, a menos que também sejam por 400.*/

function AnoBissexto(valor){

if(valor%4==0  && valor%100!=0 || valor%400==0  ){

console.log(valor+" É um ano bissexto")

}

else{


console.log(valor+" Não é um ano bissexto")	

}

}