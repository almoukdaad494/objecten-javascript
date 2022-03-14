var cont=document.querySelector('.cont');
var druk=document.querySelector('#druk');
var naamEl=document.querySelector('#naam');
var cijferEl=document.querySelector('#cijfer');
var objarr=[]; // een lege array om objecten daar aan toe te voegen
var txt=maakEl('p','');
cont.appendChild(txt);

// 
// Jan 9 
// Ann 8 
// Piet 7
function Cijfer(naam,cijfer){
    this.naam=naam;
    this.cijfer=cijfer;
}

obj1=new Cijfer("Jan",9);
objarr.push(obj1); // toegevoegd aan de objects array
obj2=new Cijfer("Ann",8);
objarr.push(obj2);
obj3=new Cijfer("Piet",7);
objarr.push(obj3);



druk.addEventListener('click',function(e){
    e.preventDefault();

    var cijfer=Number(cijferEl.value);
    var Naam=naamEl.value.trim();

    if(Naam.length == 0 && cijfer === 0){
        txt.innerHTML="Geen input !";
    }else if(Naam.length == 0){
        txt.innerHTML="Geen naam input !";
    }else if(cijfer === 0 || !Number.isInteger(cijfer)){
        txt.innerHTML="Geen cijfer input !";
    }
    else
    {
        maakobj(naam.value,cijfer);// object wordt hier gemaakt
        for(i=0;i<objarr.length; i++){
            txt.innerHTML="Object is gemaakt!"+"<br>";
            txt.innerHTML+="De naam is "+objarr[i].naam+" en de cijfer is "+objarr[i].cijfer+"<br>";
        }
    }
})

console.log(objarr); // de array met de objecten nadat ze gemaakt zijn
function maakEl(tag,value){
    var el=document.createElement(tag);
    el.innerHTML=value;
    return el;
}


function maakobj(naam,cijfer){ // functie om objecten te maken en de objecten automatische aan een array toe te voegen
    var obj=new Cijfer(naam,cijfer);
    objarr.push(obj);
}