function Order(flavor, glaze, amount) {
    this.flavor=flavor;
    this.glaze=glaze;
    this.amount=amount;
}

function addItem() {
    
    var glazeInput = document.getElementById("options");
    var amountInput = document.getElementById("choose-amount");
    var newOrder = Order("blackberry", glazeInput, amountInput);
    
    newItem.appendChild(document.createTextNode(itemInput.value));
    orderList.appendChild(newItem);
    console.log("testing");
}

// function deleteListItem(item) {
//     // remove li element (item) from ol element (item.parentNode)
//     item.parentNode.removeChild(item);
//     }


// function completeListItem(item) {
//     if (item.checked) { // true if the input checkbox is checked
//     item.parentNode.style.textDecoration = "line-through";
//     // in css, this would be: "text-decoration: line-through"
//     } else {
//     item.parentNode.style.textDecoration = "none";
//     // in css, this would be: "text-decoration: none"
//     }
//     }