var age = prompt('Wat is uw leeftijd?');

if (age < 14){
	alert('Sorry dit spel is 14+')
}
else{
	alert('Het spel gaat beginnen! Type A of B in om te andtwoorden. \n(LET OP HOOFDLETTERGEVOELIG!)')
	var vraag1 = prompt('Level 1: \nHet luchtalarm gaat af wat doe je? \nA. Je doet niks en denkt dat het een test is. \nB. Je zoekt op wat er aan de hand is en neemt maatregelen. ')
}
if (vraag1 == 'B'){
	var vraag2 = prompt('Level 2: \nJe komt er achter dat er over ongeveer 30min een supervulkaan uitgaatbarsten wat doe je? \nA. Je pakt je belangrijkste spullen in en je zorgt dat je uit de gevarezone bent. \nB. Je vlugt maar je denkt dat je op 1km afstand wel veilig bent.')
}
else{
	alert('Gameover!')
}

if (vraag2 == 'A'){
	var vraag3 = prompt('Level 3: \nJ')
}
else{
	alert('Gameover!')
}
