var age = prompt('Wat is uw leeftijd?');

if (age < 14) {
	alert('Geen toegang! 14+')
}
if (age >= 14) {
	alert('Het spel gaat beginnen! Type A of B in om te andtwoorden. \n(HOOFDLETTER GEVOELIG!)')
	alert('Je zit rustig op de bank en...')
	var level1 = prompt('Level 1: \nHet luchtalarm gaat af wat doe je? \nA. Ik doe niks en ik denk dat het een test is. \nB. Ik zoek op wat er aan de hand is en ik neem maatregelen. ')
}
if (level1 == 'B') {
	document.write('Je hoort het luchtalarm en zoekt op wat er aan de hand je komt er achter dat er een vulkaan uitgaat barsten.')
	alert('Je hebt het nieuws gezien en je komt er achter..')
	var level2 = prompt('Level 2: \nDat er over ongeveer 30min een supervulkaan uitgaatbarsten wat doe je? \nA. Ik pak mijn belangrijkste spullen in en ik zorgt dat ik uit de gevarenzone bent. \nB. Je vlugt maar je denkt dat je op 1km afstand wel veilig bent.')
} 
if (level1 == 'A') {
	alert('Het was geen test en je hebt het niet overleefd door een....')
}
if (level2 == 'A') {
	document.write('Level 2: Je pakt je belangrijkste spullen en fietst de gevarenzone uit.')
	alert('Je bent binnen 15min uit de gevarenzone en komt er achter dat je telefoon vergeet.')
	var level3 = prompt('Level 3: \nWat doe je? \nA. Ik durft niet terug dus laat je het. \nB. Ik bel iemand die hem op kan halen.')
}
if (level2 == 'B') {
	alert('Je hebt de vulkaan onderschat en je smelt weg in de lava!')
}
if (level3 == 'A') {
	document.write('Je komt er achter dat je je telefoon bent vergeten maar neemt de slimme keuze om niet terug te gaan.')
	alert('Je ziet ineens mensen om de hoek..')
	var level4 = prompt('Level 4: \nKomen rennen wat doe je? \nA. Ik ga kijken wat er aan de hand is.  \nB. Ik ren mee met de groep.')
}
if (level3 == 'B') {
	alert('Zonder telefoon kan je niemand bellen je besluit terug te gaan en red het niet levend terug!')
}
if (level4 == 'B') {
	document.write('Je ziet een groep mensen de hoek om rennen en besluit mee te rennen omdat je niet weet wat er aan de hand is.')
	alert('Je weet nogsteeds niet wat er aan de hand is en je besluit na een kwartier om terug te gaan.')
	var level5 = prompt('Level 4: \nJe ziet snel stromende lava op je afkomen wat doe je? \nA.  \nB. ')
}
if (level4 == 'A') {
	alert('Je loopt de hoek om en ziet dat er een vuurbal is neergestort\n en terwijl je het niet door had viel er een recht boven op je!')
}

else {
	alert('Vul A of B in!(HOOFDLETTER GEVOELIG')
}
