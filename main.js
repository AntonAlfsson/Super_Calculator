$(document).on("click", "button", function() {
    
    if(parseInt($(this).attr("data-id")) || $(this).attr("data-id") == 0){
        console.log($(this).attr("data-id"));
        writeToInputField($(this).attr("data-id"));
    }else if(($(this).attr("data-id")) == 'ac'){
       erase();

    }
    else{
        console.log('hej');
        console.log($(this).attr("data-id"));        
    }    
});

function writeToInputField(elementId) {
    
    var text = $(document).find("#input-field").val();
    text += elementId;
    
    $(document).find("#input-field").val(text);
}

function erase(){

    $(document).find("#input-field").val('');
}