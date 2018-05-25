function getdayweek(){

	var data = new Date(document.getElementById('data').value)
	var dia = data.getDay()

	var semana = []

	semana[0]='Domingo';
	semana[1]='Segunda-Feira';
	semana[2]='Terça-Feira';
	semana[3]='Quarta-Feia';
	semana[4]='Quinta-Feira';
	semana[5]='Sexta-Feira';
	semana[6]='Sábado';

	document.getElementById('Textarea').innerHTML = semana[dia+1];


}