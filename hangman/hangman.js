var rand=0;
var word=" ";
var divwidth=50;
var wordlength = 0;
var spaces = 0;
var numRight=0;
var mistake = 10;
var nextImg = 1;

var fruits=["Apple","Banana","Cherry","Date","coconut","Orange"];
var animals=["cow","sheep","goat","elephant","Tiger", "Bear", "Lion", "Monkey"];

function play(){
	document.getElementById("intropage").style.display="none";
	document.getElementById("singlepage").style.display="block";
}

function fruit(){
	rand=Math.floor(Math.random() * fruits.length);
	word=fruits[rand];
	document.getElementById("intropage").style.display = "none";
	document.getElementById("singlepage").style.display="none";
	document.getElementById("categoryname").innerHTML=" Guess FruitName"
	hangman();
	

}
function animal(){
	rand=Math.floor(Math.random() * animals.length);
	word=animals[rand];
	document.getElementById("intropage").style.display="none";
	document.getElementById("singlepage").style.display="none";
	document.getElementById("categoryname").innerHTML=" Guess AnimalName"
	hangman();
}

function hangman(){
	var x= word.length;
	var y= x - 1;
	divwidth = divwidth * x + 10;
	document.getElementById("wordwrap").style.width= divwidth+"px";
	while(x>0){
		var letter=word.substring(y,x);
		if(letter === " "){
			document.getElementById("letter"+ x).innerHTML="&nbsp";
			document.getElementById("letter"+ x).style.visibility="hidden"
			document.getElementById("letter"+ x).style.display="block";
			document.getElementById('underline' + x).style.display = "block";
			spaces++;

		}else{
			document.getElementById('letter' + x).innerHTML = letter;
			document.getElementById('letter' + x).style.visibility = "hidden";
			document.getElementById('underline' + x).style.display = "block";
			document.getElementById('underline' + x).style.borderBottom = "2px solid black";
		}
		x--;
		y--;
	}
	wordlength=word.length - spaces;

	document.getElementById('singlepage').style.display = "none";
	document.getElementById('gamepage').style.display = "block";
}

function guessletter()
{

	var target = event.target;
	var correct=false;
	target.style.visibility = "hidden"; 

	var lower = target.id;
	var upper = document.getElementById(lower).getAttribute('value');

	for(var a=1;a<=10;a++)
	{
		if(document.getElementById('letter'+a).innerHTML===lower || document.getElementById('letter'+a).innerHTML===upper)
		{
			document.getElementById('letter' + a).style.visibility = "visible";
			correct = true;
			numRight++;
		}

	}

	if (correct == false)
	{
		mistake--;
		++nextImg;
		document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
		document.getElementById('hangImg').src = 'hang'+ nextImg +'.png';
	}
	if (mistake <= 0)
	{
		mistake = 0;
		document.getElementById('winStatus').innerHTML = 'You lose!!!';
		lose();
	}
	if(numRight==wordlength)
	{
		document.getElementById('winStatus').innerHTML = "You Won";
		win();
	}
}

function win()
{
	document.getElementById('gamepage').style.display = "none";
	document.getElementById('endPage').style.display = "block";
	document.getElementById('guessedWord').innerHTML = word;

}
function lose() {
	document.getElementById('gamepage').style.display = "none";
	document.getElementById('endPage').style.display = "block";
	document.getElementById('guessedWord').innerHTML = word;

}