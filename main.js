// Global vars -->
var commaPresent = false;
var savedValue = 0;
var operatorPicked;
// <--

$(document).on("click", "button", function() {
    
    if(parseFloat($(this).attr("data-id")) || $(this).attr("data-id") == 0){
        console.log($(this).attr("data-id"));
        writeToInputField($(this).attr("data-id"));

    }else{

        switch($(this).attr("data-id")) {

        	case "ac":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;
        	case "÷":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;
        	case "x":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;	
        	case "-":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;
        	case "+":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;
        	case "=":
        		console.log($(this).attr("data-id"));
        		//Method call
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
  savedValue  = savedValue + talet;
}
 

function multiply() {
	savedValue = savedValue * talet;
}

function handleErrorCalculation() {
    if (savedValue == 0){
        savedValue = "Error";
    }
    else
        savedValue = savedValue;
}

// Keyboard-bindings
$(document).on("keydown", function(event) {
	//console.log(event.which);
	
	if(event.which == 97 || event.which == 49) {
		console.log('Button 1');
		writeToInputField('1');
	} else if(event.which == 98 || event.which == 50) {
		writeToInputField('2');
		console.log('Button 2');
	} else if(event.which == 99 || event.which == 51) {
		writeToInputField('3');
		console.log('Button 3');
	} else if(event.which == 100 || event.which == 52) {
		writeToInputField('4');
		console.log('Button 4');
	} else if(event.which == 101 || event.which == 53) {
		writeToInputField('5');
		console.log('Button 5');
	} else if(event.which == 102 || event.which == 54) {
		writeToInputField('6');
		console.log('Button 6');
	} else if(event.which == 103 || event.which == 55) {
		writeToInputField('7');
		console.log('Button 7');
	} else if(event.which == 104 || event.which == 56) {
		writeToInputField('8');
		console.log('Button 8');
	} else if(event.which == 105 || event.which == 57) {
		writeToInputField('9');
		console.log('Button 9');
	} else if(event.which == 96 || event.which == 48) {
		writeToInputField('0');
		console.log('Button 0');
	} else if(event.which == 107 || event.which == 171) {
		console.log('Button +');
		addition();
	} else if(event.which == 109 || event.which == 173) {
		console.log('Button -');
		subtraction();
	} else if(event.which == 106 || event.which == 222) {
		console.log('Button *');
		multiply();
	} else if(event.which == 47 || event.which == 111) {
		console.log('Button /');
		division();
	} else if(event.which == 110 || event.which == 188) {
		console.log('Not implemented');
		console.log('Button ,');
	} else if(event.which == 13) {
		console.log('Button Enter');
		totalSum();
	}
	
});