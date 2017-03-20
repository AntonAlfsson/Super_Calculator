$(document).on("click", "button", function() {
    
    if(parseFloat($(this).attr("data-id")) || $(this).attr("data-id") == 0){
        console.log($(this).attr("data-id"));
        writeToInputField($(this).attr("data-id"));
    }
    else{
        console.log('hej');
        console.log($(this).attr("data-id"));
        
    }
    
});


function writeToInputField(elementId) {
    
    var text = $(document).find("#input-field").val();
    if(maxValue(text)=="err"){
        $.playSound('Robot_blip-Marianne_Gagnon-120342607');
    }else{
        text += elementId;
    }
    $(document).find("#input-field").val(text);
 
}

function maxValue(savedValue){
    if(savedValue.length<10){
        return savedValue;
    }else{
        return "err";
    }
    
}
 

