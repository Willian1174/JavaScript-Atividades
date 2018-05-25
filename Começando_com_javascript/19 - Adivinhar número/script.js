function SearchNumber(){


	var num = parseInt(document.getElementById('num').value)

	console.log(number_search)


	if(num>number_search){


		document.getElementById('Textarea').innerHTML = "Você errou! "+num+" É muito alto";

	}

	if(num<number_search){


		document.getElementById('Textarea').innerHTML = "Você errou! "+num+" É muito baixo";


	}

	if(num==number_search){

		alert('Acertou!')

		window.location.reload()

	}


}

