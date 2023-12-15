
// Initialize variables
var messages, counter, currentMessage, newMessage

// Create array of all the messages to display
messages = ["2020 is coming to a close", "The fall semester is finishing soon", "I'm excited for the holidays", "It's going to start snowing", "I love hot chocolate"]

// Initialize counter to 0
counter = 0


function showMessage(){

    // Update counter by adding one- moves to the next message in the sequence
    counter = counter + 1


    // Access the current message
    currentMessage = document.getElementById("message")

    // Index into the new array for the next message
    newMessage = messages[counter% messages.length] 
    // Replace the old message with the new message
    currentMessage.innerHTML = newMessage


}
