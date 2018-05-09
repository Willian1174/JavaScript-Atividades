function findLongestWord(words){

	var receptor = 0;

	var frase = words.split(" ");

	var maior="";

	var aux = 0;


	for(var i = 0; i < frase.length; i++){

		aux = frase[i].length;

		if(receptor < aux){

			maior=frase[i];
            
            receptor = aux;

		}

	}

	return maior;

}