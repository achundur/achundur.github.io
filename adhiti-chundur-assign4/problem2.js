


function sortShows() {
// Initialize variables
var sorting, shows

// Set sort to true
sorting = true
// loop through list (unknown # of times)
    // Do this by setting sort to true
while (sorting == true){

    sorting = false
    // Access list elements and store in an array
    shows = document.getElementById("showList").getElementsByTagName("li")
    // loop through each show
    // need to have length-1 because we are indexing to the next element too-
    // prevents us from going to an undefined index 
        for(i=0; i<shows.length-1; i++) {
        // check if first letter is bigger than the next item
            if (shows[i].innerHTML.charAt(0) > shows[i+1].innerHTML.charAt(0)) {
                // if it is, switch positions (call function)
                switchShowPosition(shows[i], shows[i+1])
                sorting=true
            }
        // If not, continue to next iteration of loop
            
        }   
}

}

// helper function for switching shows
function switchShowPosition (current, next) {
    // switch positions of two shows
    current.parentNode.insertBefore(next, current)
}

