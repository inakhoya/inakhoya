$(document).ready(function(){
    let E7 = $(".E7"),
    area = $("#area"),
    escape = $("#escape"),
    unescape = $("#unescape"),
    EA7 = $(".EA7"),
    copyTo = $("#copyTo"),
    saveTo = $("#saveTo"),
    output = $("#output");

    E7.hide();
    EA7.hide();

    E7.click(function() {
        E7.show();
    });
    escape.click(function(){
        if(area.val().trim() === ""){
            EA7.hide();
            E7.show();
        } else {
            EA7.show();
            E7.hide();
            output.val(JSON.stringify(area.val()));
        }
    });
    
    unescape.click(function(){
        if(area.val().trim() === ""){
            EA7.hide();
            E7.show();
        } else {
            EA7.show();
            E7.hide();
            output.val(JSON.parse(area.val()));
        }
    });
});