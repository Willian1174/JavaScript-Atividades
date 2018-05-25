//Deixar todas as primeiras letras maiúsculas

function titleize(text){
	
	var resultado=''
	var palavra = text.split(' ')

	var obj = {
		

	}
	for (var i = 0; i < palavra.length; i++){

		obj[palavra[i]]=palavra[i].substring(0,1).toUpperCase()+palavra[i].substring(1,palavra[i].split('').length)
		resultado+=' '+obj[palavra[i]]
		
	}
	return console.log(resultado)
}
