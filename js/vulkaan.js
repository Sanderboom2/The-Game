var age = prompt('Wat is uw leeftijd?');

if (age < 14) {
	alert('Geen toegang! 14+')
}
else if (age >= 14) {
	alert('Het spel gaat beginnen! Type A of B in om te andtwoorden. \n(HOOFDLETTER GEVOELIG!)')
	alert('Je zit rustig op de bank en...')
	var level1 = prompt('Level 1: \nHet luchtalarm gaat af wat doe je? \nA. Ik doe niks en ik denk dat het een test is. \nB. Ik zoek op wat er aan de hand is en ik neem maatregelen. ')
	if (level1 == 'B') {
		document.write('Je hoort het luchtalarm en zoekt op wat er aan de hand je komt er achter dat er een vulkaan uitgaat barsten.')
		alert('Je hebt het nieuws gezien en je komt er achter..')
		var level2 = prompt('Level 2: \nDat er over ongeveer 30min een supervulkaan uitgaatbarsten wat doe je? \nA. Ik pak mijn belangrijkste spullen in en ik zorgt dat ik uit de gevarenzone bent. \nB. Je vlugt maar je denkt dat je op 1km afstand wel veilig bent.')	
}	
	if (level1 == 'A') {
	alert('Het was geen test en je hebt het niet overleefd door een....')
}
	if (level2 == 'A') {
		document.write(' Je pakt je belangrijkste spullen en fietst de gevarenzone uit.')
		alert('Je bent binnen 15min uit de gevarenzone en komt er achter dat je telefoon vergeet.')
		var level3 = prompt('Level 3: \nWat doe je? \nA. Ik durft niet terug dus laat je het. \nB. Ik bel iemand die hem op kan halen.')
}
	if (level2 == 'B') {
	alert('Je hebt de vulkaan onderschat en je smelt weg in de lava!')
}
	if (level3 == 'A') {
		document.write(' Je komt er achter dat je je telefoon bent vergeten maar neemt de slimme keuze om niet terug te gaan.')
		alert('Je ziet ineens mensen om de hoek..')
		var level4 = prompt('Level 4: \nKomen rennen wat doe je? \nA. Ik ga kijken wat er aan de hand is.  \nB. Ik ren mee met de groep.')
}
	if (level3 == 'B') {
	alert('Zonder telefoon kan je niemand bellen je besluit terug te gaan en red het niet levend terug!')
}
	if (level4 == 'B') {
		document.write(' Je ziet een groep mensen de hoek om rennen en besluit mee te rennen omdat je niet weet wat er aan de hand is.')
		alert('Je weet nogsteeds niet wat er aan de hand is en je besluit na een kwartier om terug te gaan.')
		var level5 = prompt('Level 5: \nJe ziet snel stromende lava op je afkomen wat doe je? \nA. Ik klim op een ladder die tegen een gebouw aan staat.  \nB. Ik ren een steeg in omdat ik nergens anders heen kan rennen.  ')
}
	if (level4 == 'A') {
	alert('Je loopt de hoek om en ziet dat er een vuurbal is neergestort\n en terwijl je het niet door had viel er een recht boven op je!')
}
	if (level5 == 'A') {
		document.write(' Je besluit na een kwartier om terug te gaan en ziet stromende lava op je af komen je klimt een ladder van een gebouw op.')
		alert('Je klimt de ladder op en via een openstaand raam kan je het gebouw in vluchten! Je loopt naar de andere kant...')
		var level6 = prompt('Level 6: \nVan het gebouw en zie dat daar ook lava stroomt wat doe je? \nA. Ik spring en hoop dat ik over de lava heen kom.  \nB. Ik klim het dak op en hoop dat het gebouw het volhoud. ')
}
	if (level5 == 'B') {
	alert('De steeg liep dood en je verbrand levend!')
}
	if (level6 == 'A') {
		document.write(' Je loopt naar de andere kant van het gebouw en ziet dat de lava je heeft omsingeld. Je neemt een gok en springt over de lava heen.')
		alert('Je land veilig op de grond en ziet ineens een regen van as en vuur uit de lucht komen vallen.')
		var level7 = prompt('Level 7: \nWat doe je? \nA. Ik ga onder de meest dichtbijzijnde auto liggen.  \nB. Ik neem een gok en ren door de regen heen om een afdakje te zoeken. ')
}
	if (level6 == 'B') {
	alert('Het gebouw was niet sterk genoeg je zakt samen met het gebouw weg in een lava zee!')
}
	if (level7 == 'B') {
		document.write(' Je land veilig op de grond en ziet regen van as en vuur uit de lucht komen je neemt een gok en rent door de regen heen en met veel geluk kom je veilig onder een afdakje te staan.	')
		alert('Je staan onder een afdakje en ziet dat de regen vermindert verderop wordt er een dam gebouwt.')
		var level8 = prompt('Level 8: \nDie de lava omleid naar zee wat doe je. \nA. Ik help mee met bouwen. \nB. Ik help niet mee en red mijzelf. ')
}
	if (level7 == 'A') {
	alert('Er was nogsteeds lava aan het stromen en het kwam gewoon onder de auto door.')
}
	if (level8 == 'B') {
	alert('Doordat je niet mee hielp is de dam niet sterk genoeg heel het land komt door jou onder lava te staan.')
}
	if (level8 == 'A') {
		document.write(' Je ziet mensen een dam bouwen en je helpt mee met bouwen. De lava wordt omgeleid naar zee!')
		alert('De lava stroomt richting Zee je ziet een hond lopen en de lava gaat..')
		var level9 = prompt('Level 9: \nZijn kant op! Wat doe je? \nA. Ik haal het nooit en red de hond niet. \nB. Ik riskeer mijn leven en red de hond. ')
}	
	if (level9 == 'B') {
		document.write(' Je ziet lava afkomen op een hond je bent zo moedig om hem te redden.')
		alert('Je vind een groot gat in de dam terwijl de lava dichterbij komt!')
		var level10 = prompt('Level 10: \nWat doe je? \nA. Ik roep hulp en samen met anderen bouw ik het dicht met stoeptegels.  \nB. Ik denk dat het niet zo veel kwaad kan de lava gaat toch al richting zee. ')
}	
	if (level9 == 'A') {
	alert('Je had de hond makkelijk kunnen redden!')
}
	if (level10 == 'A') {
		document.write('Je vind een gat in de dam en samen met een groepje mensen bouw je het gat dicht met stoeptegels. Al het lava stroomt de zee in en je hebt het avontuur overleefd!')
		alert('GOEDZO! Je hebt de game overleefd!')
}
	if (level10 == 'B') {
		alert('Het gat was natuurlijk wel een probleem heel de dam is voor niks gebouwt!')
}
}//else if
