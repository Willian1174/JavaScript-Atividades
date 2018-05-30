/*16 Escreva uma função select(array, filter) que retorna um array contendo todos os itens de acordo com o resultado da função passada como filtro. Se o filtro não for uma função, lança uma exceção. select([4,3,9,2,10], function(number) { return number % 2 === 0; }) ⇒ [4,2,10]*/

function select(array,filter_parameter){

	typeof filter_parameter!=='function'?console.log("Filter não é uma função, digite novamente"):console.log(array.filter(filter_parameter))


}