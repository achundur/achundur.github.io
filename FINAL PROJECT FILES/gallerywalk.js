

/**when document is ready, for every a element in tehe class "learn-more-artist",
 * link the click event to the onClick_LearnMore function**/
 
$( document ).ready(function() {
    $("a.learn-more-artist").on("click",onClick_LearnMore)
    //console.log( "ready!" );
});

function onClick_LearnMore(event){
    var galleryItem=$(event.target).attr("data-adhiti");
    alert(galleryItem);
}

/**use switch expression to put in all the cases */