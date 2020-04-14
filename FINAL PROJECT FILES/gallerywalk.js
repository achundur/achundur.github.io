
/**when document is ready, for every a element in tehe class "learn-more-artist",
 * link the click event to the onClick_LearnMore function**/
$(function(){
    console.log("window", window.location.href);
    console.log("title", $("title")[0].text);
    // var currentIndex=0;
    // var pageTitle = $("title")[0].text
    // if (pageTitle == "TESTING timeline"){
    //     currentIndex = 4
    // }
    // $('.js-timeline').Timeline({startItem:currentIndex});
  });
$( document ).ready(function() {
    $("a.learn-more-artist").on("click",onClick_LearnMore);
    $("a.back-to-intro").on("click",onClick_BackToIntro);
    $("a.continue-reading").on("click",onClick_ContinueReading);
    $("a.back-to-details").on("click",onClick_BackToDetails);
    $("div[data-adhiti-date]").on("click", onClick_GoToGalleryItem);
    var currentIndex=0;
    // var pageTitle = $("title")[0].text
    // if (pageTitle == "TESTING timeline"){
    //     currentIndex = 4
    // }
    var m = $("meta[name=galleryIndex]");    

    currentIndex = m.attr("content");
    console.log("currentIndex", currentIndex)
    $('.js-timeline').Timeline({startItem:currentIndex});
    
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


function onClick_BackToIntro(event){
    $("#gItemDetail").attr( "style", "display: none;" );
    $("#gItemIntro").show(700);
}


/**CONTINUE READING */


function onClick_ContinueReading(event){
    console.log("continue reading is working")
    $("#gallery-item").attr( "style", "display: none;" );
    $("#artist-profile").show(700);
}

function onClick_BackToDetails(event){
    console.log("continue reading is working")
    $("#artist-profile").attr( "style", "display: none;" );
    $("#gallery-item").show(700);
}

function onClick_GoToGalleryItem(event){
    console.log("clicked on date");
    var date=$(event.target).attr("data-adhiti-date");
    console.log(date);
}