
function search(){

// Get input and store in variable
var searchInput
searchInput = document.getElementById("searchbarInput").value.toLowerCase()
console.log(searchInput)
// Get all of the list options and store it in an array / variable
var buildings
buildings = document.getElementsByTagName("li")



// Loop through each building in the list
for(i=0; i<buildings.length; i++){
    currentBuilding = buildings[i].firstChild.innerHTML.toLowerCase()


    // check if the search input is a match

    if(currentBuilding.includes(searchInput)){
        buildings[i].style.display = ""
        // make visible if it is a match
    }

    else{

        buildings[i].style.display="none"
        // set display to none if it is not a match
        
    }

    // use display: hidden because "visilbility" will have that list element still take up space
}


}


