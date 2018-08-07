/*Script para pegar valores dos inputs na index.html e efetua o calculo do imc

*/

function imc (){

	var peso = parseFloat(document.getElementById("peso").value)
	var altura = parseFloat(document.getElementById("altura").value)
	var imc = peso/(Math.pow(2,2))

	if(imc<18){
     
      document.getElementById("Resultado").innerHTML="IMC: "+imc+"</p><strong>Abaixo do peso</strong>";
      

	}

	else if(imc>=18 && imc<=24.9){
     
      document.getElementById("Resultado").innerHTML="IMC: "+imc+"</p><strong>Peso Normal</strong>";
       

	}

	else if(imc>=25 && imc<=29.9){
     
      document.getElementById("Resultado").innerHTML="IMC:"+imc+"</p><strong>Acima do Peso</strong>";


	}

	else if(imc>=30 && imc<=34.9){
     
      document.getElementById("Resultado").innerHTML="IMC:"+imc+"</p><strong>Obesidade nível 01</strong>";
     

	}

	else if(imc>=35 && imc<=39.9){
     
      document.getElementById("Resultado").innerHTML="IMC:"+imc+"</p><strong>Obesidade nível 02</strong>";
 
	}

	else if(imc>40){
     
      document.getElementById("Resultado").innerHTML="IMC:"+imc+"</p><strong>Obesidade mórbida</strong>";
      

	}


}