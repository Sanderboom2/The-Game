var age = prompt('Wat is uw leeftijd?');

if (age < 14) {
	alert('Geen toegang! 14+')
}
else if (age >= 14) {
	alert('Het spel gaat beginnen! Type A of B in om te andtwoorden. \n(HOOFDLETTER GEVOELIG!)')
	alert('Je zit in het vliegtuig er worden instructies geveven in geval van nood.')
	var level1 = prompt('Level 1: \nWat doe je? \nA. Ik let op voor de zekerheid.  \nB. Ik let niet op ik heb nog nooit meegemaakt dat ik zulke informatie nodig had. ')
}
if (level1 == 'A') {
	document.write('Je let goed op tijdens de nood instructies in het vliegtuig.')
	alert('Opeens lijkt het vliegtuig neer te storten boven zee..')
	var level2 = prompt('Level 2: \nWat doe je? \nA. Ik ga op de grond liggen met mijn hoofd onder mijn stoel. \nB. Ik doe een zwemvest aan en ga zitten mijn mijn armen over mijn hoofd. ')
} 
else if (level1 == 'B') {
	alert('Je hebt de instructies gemist er gaat iets fout met het vliegtuig en je weet niet wat je moet doen....')
}
if (level2 == 'B') {
	document.write('Hierdoor weet je wat je moet doen en doe je een zwemvest aan zodra je erachter komt dat het vliegtuig neerstort boven zee.')
	alert('Het vliegtuig stort nu het water in..')
	var level3 = prompt('Level 3: \nWat doe je?  \nA. Ik open een van de deuren en spring uit het vliegtuig.  \nB. Ik open een van de deuren ik laat een rubbere glijbaan naar beneden vallen en glijd naar beneden. ')
}
else if (level2 == 'A') {
	alert('Het vliegtuig stort neer boven zee een zwemvest zou best verstandig zijn...')
}
if (level3 == 'B') {
	document.write('Je maakt de deur van het vliegtuig open en laat de rubbere noodglijbaan naar beneden vallen en glijd er van af.')
	alert('Je ligt nu in het water ')
	var level4 = prompt('Level 3: \n \nA.  \nB.  ')
}
else if (level3 == 'A') {
	alert('Je beland verkeert op het water en verdrinkt.')
}