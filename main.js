$(function() {
    console.log("DOM ready!");

    $(document).find(".calculator").on("click", function(event) {
        event.preventDefault();
        writeToInputField(event.target.id);

    });

});

function writeToInputField(elementId) {
    $(document).find("#input-field").text(elementId);
}
