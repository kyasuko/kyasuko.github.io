(function () {


    window.onload = function () {


        $('.gamePiture').mouseover(function(){
            $(this).animate({
                width: "+=5",
                height: "+=1"
              }, 50);
        }).mouseleave(function(){
            $(this).animate({
                width: "-=5",
                height: "-=1"
              }, 50);
        })
     

    };


})()