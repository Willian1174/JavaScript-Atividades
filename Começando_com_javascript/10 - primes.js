//Exibir números primos de uma faixa de valores

function primes(start,end){
	
	var prime=[]
    
    var result ="" 

	for(var i = start; i <= end; i++){

		if(i%2!=0 && i>1 || i==2){

            prime[i] = i 
            result +="  "+prime[i] 

		}
	
	}

	return console.log(result)

}

