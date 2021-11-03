//Beatriz_Rainha_Projeto1_FBAUP_2021/2022
//Poesia visual, poesia concreta.
// JavaScript Document
console.log("olá");

//definir as variáveis.
let mainContainer; 
let column;
let row;
let fundo;
let target;
let section1;
let section2;
let privacy;
let transparency;
let whiteTransparency;
let whitePrivacy;


//define a função que vai criar o padrão 'random' de fundo com a palavra "NO".
function myFundo() {
  console.log("running myfundo"); //verifica se a função está a correr.
	
	mainContainer = document.createElement ("div");
	mainContainer.setAttribute('class', 'mainContainer');
	target = document.querySelector("main");
    target.appendChild(mainContainer); //cria um 'contentor' principal (div) e coloca-o dentro do main.
	
	
	for (let n = 0; n < 5; n++) {
	row = document.createElement ("div");
	row.setAttribute('class', 'row' + n); 
	target = document.querySelector('.mainContainer');
    target.appendChild(row); //cria um loop de 5 divs, cada um com uma classe 'row' de forma numerada; cria 5 filas na vertical dentro do mainContainer (div principal).
		
	row.style.cssText = `position: relative;
		display: block;`; //atribui as propriedades de CSS aos divs 'row'.

	
	for (let i = 0; i < 6; i++) {
	column = document.createElement ("div");
	column.setAttribute('class', 'column' + i);
	target = document.querySelector('.row' + n);
    target.appendChild(column); //cria um loop de 6 divs, cada um com uma classe 'column' de forma numerada; cria 6 colunas na horizontal dentro de cada fila vertical (divs 'row'). 
	
	column.style.cssText = `position: relative;
		display: inline;`; //atribui as propriedades de CSS aos divs 'column'.
		
	
  for (let a = 0; a < 110; a++) {
    fundo = document.createElement("p");
    fundo.innerHTML = "NO"; //cria um elemento 'p', com "NO" escrito no ecrã da página HTML. 

    let randomTop = Math.random() * window.innerHeight; //variável 'random' que define o desvio nos valores de 'top'.
    let randomLeft = Math.random() * window.innerWidth; //variável 'random' que define o desvio nos valores de 'left'.
	  
	  if (a === 50) {
		fundo.style.cssText = `
		font-size: 0.8em;
		padding-top: ${randomTop}px;
		padding-left: ${randomLeft}px;
		font-weight: 800;
		color: rgba(0,0,0,1.00);
		position: absolute;`;
	  } else {
	    fundo.style.cssText = `
		font-size: 1.2em;
		padding-top: ${randomTop}px;
		padding-left: ${randomLeft}px;
		font-weight: 400;
		position: absolute;`; 
} //define uma condição em que todos os "p" = 50 têm um peso de font maior. são ligeiramente mais pequenos e mais opacos.
	  
	  target = document.querySelectorAll('div.column' + i); //seleciona todos os elementos com a classe '.column'. 
	 
  for (let b = 0; b < target.length; b ++) {
     target[b].appendChild(fundo);	//atribui a cada um dos divs com a classe '.column' o loop 'fundo', que corresponde a 150 vezes escrita a palavra 'NO'.
	  
	 }
  	}
   }
  }
} 



function changeWeight () {
	console.log("running changeweight");
	
	fundo = document.querySelectorAll ("p");
	
	for (let f = 0; f < fundo.length; f++) {
	 
		  let randomTop = Math.random() * window.innerHeight; //variável 'random' que define o desvio nos valores de 'top'.
		  let randomLeft = Math.random() * window.innerWidth; //variável 'random' que define o desvio nos valores de 'left'.
		 
    
		fundo[50].style.cssText = `
		font-size: 1em;
		padding-top: ${randomTop}px;
		padding-left: ${randomLeft}px;
		font-variation-settings: "wght" 800;
		transition: 0.1s all;
		color: white;
		z-index: 2;
		position: absolute;`;
		
}		
}

//define a função em que ao passar com o rato em cima dos "p" ativam a função changeWeight.
function myWeight () {
	console.log("running myWeight");
	
	fundo = document.querySelectorAll ("p");
	 for (let f = 0; f < fundo.length; f ++) {
	
	fundo[f].addEventListener('mouseover', changeWeight);
 }
}


//define a função que vai criar a secção 'TRANSPARENCY' com a palavra 'TRANSPARENCY' escrita no ecrã da página HTML.
function myTransparency() {
console.log("running mytransparency"); //verifica se a função está a correr.
	
  section2 = document.createElement ("section");
  section2.setAttribute('class', 'transparency');
  target = document.querySelector('.words');
  target.appendChild(section2); //cria uma section com a classe 'transparency' dentro do main.
	
  transparency = document.createElement("h2");
  transparency.innerHTML = "TRANSPARENCY";
  target = document.querySelector('.transparency');
  target.appendChild(transparency); //cria um elemento 'h2' dentro da section 'transparency'.
}



//define a função que vai criar a secção 'privacy' com a palavra 'privacy' escrita no ecrã da página HTML.
function myPrivacy() {
console.log("running myprivacy"); //verifica se a função está a correr.
	
  section1 = document.createElement ("section");
  section1.setAttribute('class', 'privacy');
  target = document.querySelector('.words');
  target.appendChild(section1); //cria uma section com a classe 'privacy' dentro do main.
	
  privacy = document.createElement("h2");
  privacy.innerHTML = "privacy";
  target = document.querySelector('.privacy');
  target.appendChild(privacy); //cria um elemento 'h2' dentro da section 'privacy'.
}


//define a função que cria um h2 para transparency dentro da class .words.
function myWhiteT (){
	section2 = document.querySelector('.words');
	whiteTransparency = document.createElement ("h2");
	whiteTransparency.setAttribute('class', 'whiteT');
	whiteTransparency.innerHTML = "NO<br>TRANSPARENCY";
	section2.appendChild(whiteTransparency);
	whiteTransparency.style.display = "none"; 
}


//define a função que cria um h2 para privacy dentro da class .words.
function myWhiteP (){
	section1 = document.querySelector('.words');
	whitePrivacy = document.createElement ("h2");
	whitePrivacy.setAttribute('class', 'whiteP');
	whitePrivacy.innerHTML = "NO<br>PRIVACY";
	section1.appendChild(whitePrivacy);
	whitePrivacy.style.display = "none"; 
}



//define a função que vai criar o ecrã negro com "NO TRANSPARENCY" escrito a branco e esconde elementos do ecrã principal.
function changeStyle1(){
	console.log("running changestyle");
	
	privacy = document.querySelector('.privacy'); 
	transparency = document.querySelector('.transparency'); 
	mainContainer = document.querySelector('.mainContainer');
	whiteTransparency = document.querySelector('.whiteT');
	whiteTransparency.style.cssText = `
		display: inline-block;
		position: absolute;
		z-index: 1;
		top: 40%;
		left: 0;
		font-weight: 800;
		color: white;`;
	mainContainer.style.cssText = `background-color: black;`;
	mainContainer.style.backgroundImage = "none";
	privacy.style.display = "none";
	transparency.style.display = "none";
}


//define a função que vai criar o ecrã negro com "NO PRIVACY" escrito a branco e esconde elementos do ecrã principal.
function changeStyle2(){
	console.log("running changestyle");
	
	privacy = document.querySelector('.privacy'); 
	transparency = document.querySelector('.transparency'); 
	mainContainer = document.querySelector('.mainContainer');
	whitePrivacy = document.querySelector('.whiteP');
	whitePrivacy.style.cssText = `
		display: inline-block;
		position: absolute;
		z-index: 1;
		top: 40%;
		left: 0;
		font-weight: 800;
		color: white;`;
	mainContainer.style.cssText = `background-color: black;`;
	mainContainer.style.backgroundImage = "none";
	privacy.style.display = "none";
	transparency.style.display = "none";
}


//define a função que ativa a troca de ecrã em "transparency" com o click do rato.
function changeTransparency () {
	console.log("running changetransparency");
	
	transparency = document.querySelector('.transparency'); 
	transparency.addEventListener ('click', changeStyle1);
	transparency.style.cursor = "pointer";
}


//define a função que ativa a troca de ecrã em "privacy" com o click do rato.
function changePrivacy () {
	console.log("running changeprivacy");
	
	privacy = document.querySelector('.privacy'); 
	privacy.addEventListener ('click', changeStyle2);
	privacy.style.cursor = "pointer";
}


//define a função que "reverte" para o ecrã principal de "transparency".
function removeTransparency () {
	console.log("running removetransparency");
	
	privacy = document.querySelector('.privacy'); 
	transparency = document.querySelector('.transparency'); 
	whiteTransparency = document.querySelector('.whiteT');
	mainContainer = document.querySelector('.mainContainer');
	mainContainer.style.cssText = `background-color: royalblue;`;
	whiteTransparency.style.display = "none"; 
	privacy.style.display = "inline-block";
	transparency.style.display = "inline-block";
}


//define a função que "reverte" para o ecrã principal de "privacy".
function removePrivacy () {
	console.log("running removeprivacy");
	
	privacy = document.querySelector('.privacy'); 
	transparency = document.querySelector('.transparency'); 
	whitePrivacy = document.querySelector('.whiteP');
	mainContainer = document.querySelector('.mainContainer');
	mainContainer.style.cssText = `background-color: royalblue;`;
	whitePrivacy.style.display = "none"; 
	privacy.style.display = "inline-block";
	transparency.style.display = "inline-block";
}


//define a função que ativa a troca para o ecrã principal em "no transparency" com o click do rato.
function clickTransparency () {
	console.log("running clicktransparency");
	
	whiteTransparency = document.querySelector('.whiteT');
	whiteTransparency.addEventListener ('click', removeTransparency);
	whiteTransparency.style.cursor = "pointer";
}


//define a função que ativa a troca para o ecrã principal em "no privacy" com o click do rato.
function clickPrivacy () {
	console.log("running clickprivacy");
	
	whitePrivacy = document.querySelector('.whiteP');
	whitePrivacy.addEventListener ('click', removePrivacy);
	whitePrivacy.style.cursor = "pointer";
}




//define a função que vai correr todas a outras funções ao carregar a página HTML.
function pageConstructor() {
	
  myFundo();
	
  myWeight();
  
  myTransparency();
	
  myPrivacy();
	
  myWhiteT ();

  myWhiteP ();
	
  changeTransparency();
	
  changePrivacy();
	
  clickTransparency();
	
  clickPrivacy();
}


window.onload = pageConstructor(); // <-- old skool kode ;)
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
