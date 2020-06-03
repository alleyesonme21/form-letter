$(document).ready(function(){
    $("form#formInput").submit(function(event){
        const firstName = $("input#first-name").val();
        const lastName = $("input#last-name").val();

        $("span.first-name").text(firstName);
        $("span.last-name").text(lastName);

        $("#letter").show();

        event.preventDefault();
    });
});