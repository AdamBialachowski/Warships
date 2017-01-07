//Zmienne
var ktoraPlansza = "";	//zmienna do funkcji rysuj plansze
var pola = new Array(100);
var nrPola = 0;

window.onload = start;


function start(){
	zeroj();
	rysPlansze("plansza1");
	//rysPlansze("plansza2");
}

function rysPlansze(ktoraPlansza){
	var plansza = "";
	for(i=0; i<=99; i++){
		if(pola[i]==0){
			plansza = plansza + '<div class="pole" onclick="zaznaczMozliwe('+i+')">'+i+'</div>';
			if ((i+1) % 10 ==0)	plansza = plansza + '<div style="clear:both;"></div>';	
		}
		if(pola[i]==1){
			plansza = plansza + '<div class="pole1" onclick="zaznaczMozliwe('+i+')">S</div>';
			if ((i+1) % 10 ==0)	plansza = plansza + '<div style="clear:both;"></div>';	
		}
		if(pola[i]==2){
			plansza = plansza + '<div class="pole2" onclick="zaznaczMozliwe('+i+')">S</div>';
			if ((i+1) % 10 ==0)	plansza = plansza + '<div style="clear:both;"></div>';	
		}
	}
	document.getElementById(ktoraPlansza).innerHTML = plansza;
}

function zeroj(){
	for(i=0; i<=99; i++){
		pola[i]=0;
	}
}

//zaznaczanie z możliwością 4 wstecz
function zaznaczMozliwe(nrPola){
	pola[nrPola]=1;
	//*********************możliwe poziom***************
	//możliwe wstecz
	if((nrPola)%10!=0 & (nrPola-1)%10!=0 & (nrPola-2)%10!=0){
		pola[nrPola-1]=2;
		pola[nrPola-2]=2;
		pola[nrPola-3]=2;
	}
	if((nrPola)%10!=0 & (nrPola-1)%10!=0 ){
		pola[nrPola-1]=2;
		pola[nrPola-2]=2;
	}
	if((nrPola)%10!=0  ){
		pola[nrPola-1]=2;
	}
	//możliwe do przodu
	if((nrPola+1)%10!=0 & (nrPola+2)%10!=0 & (nrPola+3)%10!=0){
		pola[nrPola+1]=2;
		pola[nrPola+2]=2;
		pola[nrPola+3]=2;
	}
	if((nrPola+1)%10!=0 & (nrPola+2)%10!=0 ){
		pola[nrPola+1]=2;
		pola[nrPola+2]=2;
	}
	if((nrPola+1)%10!=0  ){
		pola[nrPola+1]=2;
	}
	//****************************możliwe pionowe****************
	if(nrPola>30){
		pola[nrPola-10]=2;
		pola[nrPola-20]=2;
		pola[nrPola-30]=2;
	}
	if(nrPola>20){
		pola[nrPola-10]=2;
		pola[nrPola-20]=2;
	}
	if(nrPola>10){
		pola[nrPola-10]=2;
	}
		if(nrPola>30){
		pola[nrPola+10]=2;
		pola[nrPola+20]=2;
		pola[nrPola+30]=2;
	}
	if(nrPola>20){
		pola[nrPola+10]=2;
		pola[nrPola+20]=2;
	}
	if(nrPola>10){
		pola[nrPola+10]=2;
	}
	rysPlansze("plansza1");
}