$(document).on("click", "button", function() {
    
    if(parseInt($(this).attr("data-id"))){
        
        writeToInputField($(this).attr("data-id"));
    }else{
        console.log('hej');
    }
    
});


function writeToInputField(elementId) {
    
    var text = $(document).find("#input-field").val();
    text += elementId;
    
    $(document).find("#input-field").val(text);
 
}
 

