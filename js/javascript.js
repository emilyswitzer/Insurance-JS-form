// JavaScript Document


function secondsToMinutes(time)
{   
   //Minutes and seconds
    let mins = Math.floor((time % 3600) / 60);
    let secs = Math.floor(time % 60);
    let answer = "";

   

    answer += "" + mins + ":" + (secs < 10 ? "0" : "");
    answer += "" + secs;
    return answer;
}

function countDown(secs,t) {
	let time = document.getElementById(t);
	time.innerHTML = secondsToMinutes(secs);
	if(secs < 1) {
		
     let popup =  location.replace("popup.html") ;
 
        clearTimeout(timer);
        
        
     
	}
	secs--;
	let timer = setTimeout('countDown('+secs+',"'+t+'")',1000);
}
                    

function checkDate(){

   let date = document.getElementById("policydate").value;
   let varDate= new Date(date);
   let today = new Date();
   today.setHours(0,0,0,0);
   
   if(varDate >= today) {

    return true;
    }
    else{
 document.getElementById("policydate").value="";
 document.getElementById("policydate").style.color="blue";
 alert("Invalid! Please enter a valid date");
 return false;
    }
    }
   

function checkValidNum(){

  let number = document.getElementById("phone").value;

if(number.length > 12 || number.length < 7)   {
        document.getElementById("phone").value="";
        alert("Invalid! Please enter a valid number");
        return false;
        }else
        return true;


} 

function checkIsAge(){
  let number = document.getElementById("age").value;
  
    if(isNaN(number)){
        document.getElementById("age").value="";
        alert("Invalid! You must enter a number");
        return false;

    
    }  else
    
        return true;

}

function checkAgeValid(){

  let number = document.getElementById("age").value;
   if(number < 17) {
       document.getElementById("age").value="";
        alert("Invalid! You must be at least 17 years old!");
        return false;
        }   
        else if(number > 99) {
       document.getElementById("age").value="";
        alert("Invalid! Please enter a valid age!");
        return false;
        } else
           return true;
    


}
//https://stackoverflow.com/questions/16647404/javascript-function-to-enter-only-alphabets-on-keypress
function lettersOnly() 
{
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)

                return true;
            else
                return false;
}
//https://stackoverflow.com/questions/7295843/allow-only-numbers-to-be-typed-in-a-textbox
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
 //YOUTUBE - https://www.youtube.com/watch?v=UliJeDbc4cw&feature=emb_title
 function getCarModels(){

    var s1 = document.getElementById("make");
	var s2 = document.getElementById("model");
	s2.innerHTML = "";
	if(s1.value == "bmw"){
		var optionArray = ["2 SERIES","3 SERIES","5 SERIES","6 SERIES", "7 SERIES"];
	} else if(s1.value == "audi"){
		var optionArray = ["A4","A5","Q3","Q7", "Q8"];
	} else if(s1.value == "skoda"){
		var optionArray = ["FABIA","KAROQ","KODIAQ","OCTAVIA", "SUPERB"];
	}
    else if(s1.value == "nissan"){
		var optionArray = ["ALTIMA","ARMADA","ROGUE","SENTRA", "VERSA"];
	}
    else if(s1.value == "volkswagon"){
		var optionArray = ["ARTEON","ATLAS","GOLF","PASSAT", "POLO"];
	}
	var options = '';

for (var i = 0; i < optionArray.length; i++) {
   options += '<option value="' + optionArray[i]+ '" text="' + optionArray[i]+ '">' + optionArray[i] + '</option>';
}
$(s2).html(options);

        }
          
     
    
function totalCost(){
   
    let age= document.getElementById("age").value;
    let ageTotal = 0;
    
    if      (age >=17 && age < 25)               { 
    ageTotal = 500; }
    else if (age >= 25 && age <= 30) {
     ageTotal = 350; } 
    else if (age > 30 && age < 65)   { 
    ageTotal = 200; } 
    else if (age > 65)               { 
    ageTotal = 500; }
    
    
    let gender = 0;
   
       if(document.getElementById('radio1').checked) {
        //Male 
        gender = 400;

        }else if(document.getElementById('radio2').checked) {
        //Female 
        gender = 250;
       } 
       
       
     let caruse=0;
      if(document.getElementById('radio8').checked) {
        //Social Domestic & PLeasure
        caruse = 30;

        }else if(document.getElementById('radio9').checked) {
        //Class 1 use
        caruse = 50;
       }  
       
       
     let security = 0;
   
       if(document.getElementById('radio3').checked) {
        //None
        security = 100;

        }else if(document.getElementById('radio4').checked) {
        //Alarm
        security = 70;
       } 
       else if(document.getElementById('radio5').checked) {
        //Immoboliser
        security = 50;
       } 
       else if(document.getElementById('radio6').checked) {
        //Alarm & Immobiliser
        security = 30;
       } 
       else if(document.getElementById('radio7').checked) {
        //Tracking device alarm & Immobiliser
        security = 10;
       }

    let fuel = 0;
         
	
    
if (document.getElementById("fuel").options[1].selected) {
    fuel = 50;
  } else if (document.getElementById("fuel").options[2].selected) {
    fuel = 40;
  } else if (document.getElementById("fuel").options[3].selected) {
    fuel = 20;
  }
  
  let cover= 0;
  
  if (document.getElementById("cover").options[1].selected) {
    cover = 400;
  } else if (document.getElementById("cover").options[2].selected) {
    cover = 200;
     }

  
   let carprice= document.getElementById("value").value;
  let cost = carprice * .10;
  
  
  let carAge= document.getElementById("carage").value;
    let carAgeTotal = 0;
    
    if (carAge <= 3)               { 
    carAgeTotal = 100; }
    else if (carAge > 3 && carAge <= 6) {
     carAgeTotal = 70; } 
    else if (carAge > 6 && carAge <= 10)   { 
    carAgeTotal = 50; } 
    else if (carAge > 10)               { 
    carAgeTotal = 20; }
    
    
    let claims = 0;
   
   if (document.getElementById("claims").options[1].selected) {
    claims = 100;
  } else if (document.getElementById("claims").options[2].selected) {
     claims = 80;
  } else if (document.getElementById("claims").options[3].selected) {
    claims = 60;
  } else if (document.getElementById("claims").options[4].selected) {
    claims = 40;
  }else if (document.getElementById("claims").options[5].selected) {
    claims = 20;
  }
  
 
  let milage= document.getElementById("milage").value;
    let milageTotal = 0;
    
    if (milage <= 15000)               { 
    milageTotal=30; }
    else if (milage > 15000 && milage <= 25000) {
     milageTotal = 40; } 
    else if (milage > 25000)   { 
    milageTotal = 50; } 
    
    
    
    
     
  document.getElementById("total").value = (ageTotal + gender + fuel + cover + cost + carAgeTotal + claims + milageTotal + security + caruse).toFixed(2);
   


}

   


function validateForm(){


  var x = document.getElementById("name").value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  } 
  var a = document.getElementById("surname").value;
  if (a == "") {
    alert("Surname must be filled out");
    return false;
  }
  var b = document.getElementById("age").value;
  if (b == "") {
    alert("Age must be filled out");
    return false;
  }
  var c = document.getElementById("phone").value;
  if (c == "") {
    alert("Phone must be filled out");
    return false;
  }
  var h = document.getElementById("policydate").value;
  if (h == "") {
    alert("Date must be filled out");
    return false;
  }
  var q = document.getElementById("carage").value;
  if (q == "") {
    alert("Car Age must be filled out");
    return false;
  }
  var u = document.getElementById("milage").value;
  if (u == "") {
    alert("Milage must be filled out");
    return false;
  }
  var p = document.getElementById("value").value;
  if (p == "") {
    alert("Value must be filled out");
    return false;
  }

  let checkone =document.getElementById('radio1').checked;
  let checktwo =document.getElementById('radio2').checked;
  
  if(checkone == false && checktwo == false){
  
      alert("Please enter your gender!")
      return false;
  
  }
  
    let check3 =document.getElementById('radio3').checked;
    let check4  =document.getElementById('radio4').checked;
    let check5 = document.getElementById('radio5').checked;
    let check6 = document.getElementById('radio6').checked;
    let check7 = document.getElementById('radio7').checked;
 
    if(check3 == false && check4 == false && check5 == false && check6 == false && check7 == false){
  
      alert("Please choose security!")
      return false;
  
  }
  
    let check8 =document.getElementById('radio8').checked;
    let check9= document.getElementById('radio9').checked;
  
  if(check8 == false && check9 == false){
  
      alert("Please enter your car use!")
      return false;
  
  } else return true;  
  





}

function getQuote(){    

let name = document.getElementById("name").value;
let surname = document.getElementById("surname").value;
let age = document.getElementById("age").value;
let phone = document.getElementById("phone").value;
let policydt = document.getElementById("policydate").value;
let milage = document.getElementById("milage").value;
let value = document.getElementById("value").value;
let carage = document.getElementById("carage").value;
let quote = document.getElementById("total").value;
let caruse;
if(document.getElementById('radio8').checked) {
        //Social Domestic & PLeasure
        caruse = "Social Domestic & Pleasure";

        }else if(document.getElementById('radio9').checked) {
        //Class 1 use
        caruse = "Class 1";
       } 
let gender;
if(document.getElementById('radio1').checked) {
        //Male
        gender = "Male";

        }else if(document.getElementById('radio2').checked) {
        //Female
        caruse = "Female";
       } 
let security;
       if(document.getElementById('radio3').checked) {
        //None
        security = "None";

        }else if(document.getElementById('radio4').checked) {
        //Alarm
        security = "Alarm";
       } 
       else if(document.getElementById('radio5').checked) {
        //Immoboliser
        security = "Immoboliser";
       } 
       else if(document.getElementById('radio6').checked) {
        //Alarm & Immobiliser
        security = "Alarm & Immobiliser";
       } 
       else if(document.getElementById('radio7').checked) {
        //Tracking device alarm & Immobiliser
        security = "Tracking device alarm & Immobiliser";
       }
       
 let fuel;
         
	
    
if (document.getElementById("fuel").options[1].selected) {
    fuel = "Diesel";
  } else if (document.getElementById("fuel").options[2].selected) {
    fuel = "Petrol";
  } else if (document.getElementById("fuel").options[3].selected) {
    fuel = "Hybrid";
  }
  
  let claims;
  
  if (document.getElementById("claims").options[1].selected) {
    claims = "1 year";
  } else if (document.getElementById("claims").options[2].selected) {
     claims = "2 years";
  } else if (document.getElementById("claims").options[3].selected) {
    claims = "3 years";
  } else if (document.getElementById("claims").options[4].selected) {
    claims = "4 years";
  }else if (document.getElementById("claims").options[5].selected) {
    claims = "5 years";
  }
  
  let make;
  if (document.getElementById("make").options[1].selected) {
    make = "BMW";
  } else if (document.getElementById("make").options[2].selected) {
    make = "SKODA";
  } else if (document.getElementById("make").options[3].selected) {
    make = "AUDI";
  } else if (document.getElementById("make").options[4].selected) {
    make = "NISSAN";
  }else if (document.getElementById("make").options[5].selected) {
    make = "VOLKSWAGON";
  }
  
   let cover;
  
  if (document.getElementById("cover").options[1].selected) {
    cover = "Fully Comprehensive";
  } else if (document.getElementById("cover").options[2].selected) {
    cover = "Third Party Fire and theft";
     }
 //https://stackoverflow.com/questions/4641962/getting-an-option-text-value-with-javascript
     let model = $("#model>option:selected").text();
      

if (validateForm()) // Calling validation function
{
  
   
//https://javascript.info/popup-windows
 let popup = open('','NewWin');
 popup.document.write(" Name : " + name + "<br> Surname : " + surname + "<br> Age : " + age + 
  "<br> Gender : " + gender + "<br> Phone : " + phone + "<br> Policy date : " + policydt + "<br> Make : " + make + " <br> Model : " + model + "<br> Fuel Type : " + fuel +
  "<br> Milage : " + milage + "<br> Claims free : " + claims + "<br> Cover : " + cover + "<br> Car Value : " + value + "<br> Security : " + security +
   "<br> Car Age : " + carage + "<br> Car Use : " + caruse  + "<br> Insurance Quote : " + quote );
     
 
 clearTimeout(timer);
}



}   


