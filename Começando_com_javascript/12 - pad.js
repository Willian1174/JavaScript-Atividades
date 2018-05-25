/*  função que retorna um texto no tamanho especificado quando ele for menor, usando o caracter 
especificado como complemento. Se nada for passado, use um espaço*/

function pad(text, size, char){
	
	if(char ==null){
		char=' '
	}

	text=text.split('')

	while(text.length<size){

		text.push(char)

	}

	return text.join('')
}