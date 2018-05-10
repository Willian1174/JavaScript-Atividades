//Embaralhando as letras aleatoriamente

function scramble(text){
	
    var word = text.split('')

	console.log(word.sort(function(a, b){return 0.5 - Math.random()}))



}

