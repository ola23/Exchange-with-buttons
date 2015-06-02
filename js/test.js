/*exchange*/
/*var have = parseFloat(document.getElementById("have").value);*/
function usd()
{
	/*var y = document.getElementById("usd").value;*/
	var amount = parseFloat(document.getElementById("amount").value);
	var kurs_dol = 3.76274;
	
	money = amount/kurs_dol
	document.getElementById("result").innerHTML = money + ' dolars';
}

function eur()
{
	/*var y = document.getElementById("usd").value;*/
	var amount = parseFloat(document.getElementById("amount").value);
	var kurs_euro = 4.11485;

	money = amount/kurs_euro
	document.getElementById("result").innerHTML = money + ' euros';
}

function gbp()
{
	/*var y = document.getElementById("usd").value;*/
	var amount = parseFloat(document.getElementById("amount").value);
	var kurs_gbp = 5.73615;

	money = amount/kurs_gbp
	document.getElementById("result").innerHTML = money + ' pounds';
}

function czk()
{
	/*var y = document.getElementById("usd").value;*/
	var amount = parseFloat(document.getElementById("amount").value);
	var kurs_czk = 0.149946;

	money = amount/kurs_czk
	document.getElementById("result").innerHTML = money + ' koruns';
}

