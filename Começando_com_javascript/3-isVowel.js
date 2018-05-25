//'Definindo se a letra é uma vogal ou consoante

function isVowel(letter){

var search = /[aeiou]/ig;

search.test(letter) ? document.write("É uma vogal") : document.write("É uma consoante")

}