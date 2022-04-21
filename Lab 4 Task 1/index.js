$(funcion())
var button = $("#button_change");

$(button).click(function(){

var input = $("#input_color");

    var inputValue = $(input).val();
    
    var element = $(".cow_color");
    
    $(element).html(inputValue);

    });


