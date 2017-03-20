// Global vars -->
var commaPresent = false;
var savedValue = 0;
var operatorPicked;
// <--

$(document).on("click", "button", function() {
    
    if(parseFloat($(this).attr("data-id")) || $(this).attr("data-id") == 0){
        writeToInputField($(this).attr("data-id"));

    }else{

        switch($(this).attr("data-id")) {

        	case "ac":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;
        	case "÷":
                savedValue = $(document).find("#input-field").val();
                $(document).find("#input-field").val('');
        		operatorPicked = '/';
        		break;
        	case "x":
                savedValue = $(document).find("#input-field").val();
                $(document).find("#input-field").val('');
        		operatorPicked = 'x';
        		break;	
        	case "-":
                savedValue = $(document).find("#input-field").val();
                $(document).find("#input-field").val('');
        		operatorPicked = '-';
        		break;
        	case "+":
                savedValue = $(document).find("#input-field").val();
                $(document).find("#input-field").val('');
        		operatorPicked = '+';
        		break;
        	case "=":
        		totalSum();
        		break;
        	case ",":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;
        	default:
        		console.log('Button not active');

        }
    }
    
});


function writeToInputField(elementId) {
    
    var text = $(document).find("#input-field").val();
    text += elementId;
    
    $(document).find("#input-field").val(text);
 
}

function division(){ // funktion för division
    savedValue = savedValue/$(document).find("#input-field").val();
}

function addition() {
    savedValue = +savedValue + +$(document).find("#input-field").val();
}

 

function multiply() {
	savedValue = savedValue * $(document).find("#input-field").val();
}

function handleErrorCalculation() {
    if (savedValue == 0){
        savedValue = "Error";
    }
    else
        savedValue = savedValue;
} 

function totalSum() {
    if (operatorPicked == "-") {
        substraction();
    }
    else if (operatorPicked == "+"){
        addition();
    }
    else if (operatorPicked == "/"){
        division();
    }
    else if (operatorPicked == "x") {
        multiply();
    }
    else
        savedValue = "Something went wrong";

     $(document).find("#input-field").val(savedValue);
}
