/*15 Escreva uma função first(array, filter) que retorna o primeiro item de acordo com o resultado da função passada como filtro. Se o filtro não for uma função, retorna o primeiro item do array. first([4,3,9,2,10], function(number) { return number > 5; }) ⇒ 9*/

function first(array,filter){

	for(i = 0; i <array.length; i++){

		if(typeof filter !== 'function'){

			return array[0]
		}

		else if(filter(array[i])){

			return array[i]
		}
	}

}

first([1,2,3,5,8,10,11], function(number){return number>5})
