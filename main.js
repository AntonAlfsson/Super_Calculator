$(document).on("click", "button", function() {
    
    if(parseInt($(this).attr("data-id")) || $(this).attr("data-id") == 0){

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
 

