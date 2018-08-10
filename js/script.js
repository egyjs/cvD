$(document).ready(function () {

    $(".bgimage").height(($(window).height()));
    $(".bgimage #sliders").css("marginTop",($(window).height()-$(".bgimage .row").height())/2);
    if($(window).width() < 767){
        $(".navbar").addClass("colorAfterScroll");
    }else {
        $(".navbar").removeClass("colorAfterScroll");
    }
    $(window).resize(function() {
        $(".bgimage").height(($(window).height()));
        $(".bgimage .row").css("marginTop",($(window).height()-$(".bgimage .row").height())/2);
        if($(window).width() < 767){
            $(".navbar").addClass("colorAfterScroll");
        }else {
            $(".navbar").removeClass("colorAfterScroll");
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) { // this refers to window
            $(".navbar").addClass("colorAfterScroll");
        }else {
            $(".navbar").removeClass("colorAfterScroll");
        }
    });


});

function lighter(el,rgbcolor) {
    var items = document.querySelectorAll(el);
    var count = items.length;

    for (var i = 0; i < count; i++) {
        // First, which step is this (between 0 and 1). This helps changing
        // the formula to other kinds of values or gradients if you need to.
        var step = i / (count - 1);

        // Alpha value. 1 - X to reverse the value from 1 downto 0.
        // X = step * 0.5, because you want from 100% to 50% instead of all the
        // way down to 0%. If you would want from 100% to 75%, change this
        // number to 0.25.
        var alpha = 1 - step * 0.5;

        // Build an rgba color value.
        var color = 'rgba('+ rgbcolor +',' + alpha + ')';
        console.log(color);

        // And set it.
        items[i].style.backgroundColor = color;
    }
    console.log("-----");
}
function darker(el,rgbcolor) {
    var items = document.querySelectorAll(el);
    var count = items.length;

    for (var i = 0; i < count; i++) {
        // First, which step is this (between 0 and 1). This helps changing
        // the formula to other kinds of values or gradients if you need to.
        var step = i / (count - 1);


        var alpha = 0.5 + step * 0.5;

        // Build an rgba color value.
        var color = 'rgba('+ rgbcolor +',' + alpha + ')';
        console.log(color);

        // And set it.
        items[i].style.backgroundColor = color;
    }
    console.log("-----");
}

lighter('#whyus .row a.btn','0, 123, 255')
darker('#whyus .row .card','255, 255, 255')
