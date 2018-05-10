function reverse(text){
	
	var aux = text.length-1;
	var texto_reverso = text[aux]; 

	for(var i = aux -1 ; i >= 0; i--){

		texto_reverso += text[i]

	}
