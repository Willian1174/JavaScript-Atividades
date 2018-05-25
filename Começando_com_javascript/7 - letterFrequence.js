// Exercício número 08 - Contar frequencia de letras

function letterFrequence(text){

var frequence = {}

var array = text.split('')

for(var i =0; i<=text.length; i++){

!frequence[array[i]] ? frequence[array[i]]=1 : frequence[array[i]]+=1

}
return frequence;
}