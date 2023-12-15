

// Initialize all variables
var colorIndex, background, lightPink, canaryYellow, salmonOrange, mintGreen, babyBlue, lightPurple

// Set counter to 0 (the first color in our array)
colorIndex = 0


// Initialize all the colors we want in our background
lightPink = "rgb(255, 192,203)"
canaryYellow = "rgb(255, 191, 0)"
salmonOrange = "rgb(255, 127, 80)"
mintGreen = "rgb(159, 226, 191)"
babyBlue = "rgb(100, 149, 237)"
lightPurple = "rgb(204, 204, 255)"

// Make an array of these colors that we can later loop through
colors = [lightPink, canaryYellow, salmonOrange, mintGreen, babyBlue, lightPurple]


function changeColor() {
    // Create new temporary variable: Add 1 to our counter, and find the remainder of 
    // the counter divided by the length of our array.
    // This lets us cycle through the array as many times as we want.
    newColorIndex = (colorIndex + 1) % colors.length
    // Index into the color list to find our new background color
    newBgColor = colors[newColorIndex]
    // Change the background color
    document.body.style.backgroundColor = newBgColor
    // Update the original counter
    colorIndex = newColorIndex
}