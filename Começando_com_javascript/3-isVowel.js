//'Definindo se a letra � uma vogal ou consoante

function isVowel(letter){

var search = /[aeiou]/ig;

search.test(letter) ? document.write("� uma vogal") : document.write("� uma consoante")

}