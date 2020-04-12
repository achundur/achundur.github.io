

/**when document is ready, for every a element in tehe class "learn-more-artist",
 * link the click event to the onClick_LearnMore function**/
 
$( document ).ready(function() {
    $("a.learn-more-artist").on("click",onClick_LearnMore)
    //console.log( "ready!" );
});

function onClick_LearnMore(event){
    var galleryItem=$(event.target).attr("data-adhiti");
    console.log(galleryItem);
    $("#gItemIntro").attr( "style", "display: none;" );
    $("#gItemDetail").show(3000);
    //$("#gItemDetail").fadeIn(3000,"linear");
    /*
    $( "#gItemDetail" ).animate({

        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      });   
      */
//https://api.jquery.com/animate/
}

$( document ).ready(function() {
    $("a.back-to-intro").on("click",onClick_BackToIntro)
    //console.log( "ready!" );
});

function onClick_BackToIntro(event){
    var galleryItem=$(event.target).attr("data-adhiti");
    console.log(galleryItem);
    $("#gItemDetail").attr( "style", "display: none;" );
    $("#gItemIntro").show(700);
}
/**use switch expression to put in all the cases */