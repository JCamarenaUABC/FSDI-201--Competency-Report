var c=1;

class Pet{
    constructor(name,age,type,breed,gender,services,owner,contactPhone, price, color){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;
        this.price=price;
        this.color=color;
        this.id=c;
        c++;
    }
}


var ServicesArray = [];

class Services{
    constructor(description,price){
        this.description=description;
        this.price=price;
    }
}

var s1= new Services("Shower", "50");
var s2= new Services("Hair cut", "100");
var s3= new Services("Gold services", "150");
var s4= new Services("Full services", "250");

ServicesArray.push(s1);
ServicesArray.push(s2);
ServicesArray.push(s3);
ServicesArray.push(s4);

function GetServicesPrices(Services){
    var Price=0;

     ServicesArray.forEach((ServicesA) =>{
        
        if(Services==ServicesA.description){           
            Price =  ServicesA.price;
        }
        //console.log();   
     });

    return Price;
}

var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Km2 Carretera Tijuana Colonia Zaragoza, Mexicali BC",
        number: "49"
    },
    hours:{
        open: "8 am",
        close: "4 pm"
    },
    pets:[    ]
}

var Porfirio = new Pet("Porfirio",7,"Dog","Cruza Husky", "Male", "Shower", "Jesus", "6862540081", GetServicesPrices("Shower"),"#ff00cc");
var Mistica = new Pet("Mistica",7,"Dog","Cruza Husky", "Female", "Full services", "Jesus", "6862540081",GetServicesPrices("Full services"),"#ff0099");
var Rafael = new Pet("Rafael",2,"Turtle","Turtle ninja", "Male", "Full services", "Jesus", "6862540081",GetServicesPrices("Full services"),"#098A00");
var LaPocha = new Pet("LaPocha",4,"Dog","Pitbull", "Female", "Gold services", "Jesus", "6862540081",GetServicesPrices("Gold services"),"#aa0011");
var Godzilla = new Pet("Godzilla",4,"Lizard","Lizard", "Male", "Full services", "Jesus", "6862540081",GetServicesPrices("Full services"),"#cc00c9");
var Napo = new Pet("Napo",6,"Dog","Dog", "Male", "Shower", "Jesus", "6862540081",GetServicesPrices("Gold services"),"#A19B72");



//console.log(ObjSalon.pets);
//get the inputs and store them in variables
var txtName = document.getElementById("name");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtbreed = document.getElementById("breed");
var txtgender = document.getElementById("gender");
var txtservices = document.getElementById("services");
var txtowner = document.getElementById("owner");
var txtcontactphone = document.getElementById("contactphone");
var txtcolorpet = document.getElementById("colorpet");

function clearInputs(){
    txtName.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservices.value="";
    txtowner.value="";
    txtcontactphone.value="";
    txtcolorpet.value="#000000";
}

function register(){
    var NewPet = new Pet(txtName.value,txtage.value,txttype.value,txtbreed.value,txtgender.value, txtservices.value, txtowner.value, txtcontactphone.value, GetServicesPrices(txtservices.value), txtcolorpet.value);

    ObjSalon.pets.push(NewPet);

    clearInputs();
   
    displaytable(NewPet);
}



function init(){
    ObjSalon.pets.push(Porfirio);
    ObjSalon.pets.push(Mistica);
    ObjSalon.pets.push(Rafael);
    ObjSalon.pets.push(LaPocha);
    ObjSalon.pets.push(Godzilla);
    ObjSalon.pets.push(Napo);

    //display(ObjSalon);
    displaytable(Porfirio);
    displaytable(Mistica);
    displaytable(Rafael);
    displaytable(LaPocha);
    displaytable(Godzilla);
    displaytable(Napo);
    //hook events
    $('#btnregister').on('click', register);
    $('#search-btn').on('click', SearchPet);
    $('#petSearch').on('keyup', SearchPet);
    //ver con el include
}


window.onload=init;

