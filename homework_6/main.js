

function Order(flavor, glaze, amount) {
    this.flavor=flavor;
    this.glaze=glaze;
    this.amount=amount;
    this.addToCart = function() {
        var myCartDiv = document.getElementById("my-cart");
        myCartDiv.className = "cart"
        var newOrder = document.createElement("div");
        newOrder.className = "order-1"
        var amountNode = document.createElement("p");
        amountNode.appendChild(document.createTextNode("x" + this.amount))
        amountNode.className = "amount"


        var detailNode = document.createElement("div");
        detailNode.appendChild(document.createTextNode(this.flavor))
        detailNode.appendChild(document.createElement("br"))
        detailNode.appendChild(document.createTextNode(this.glaze))

        detailNode.className = "details"

        var editNode = document.createElement("a")
        editNode.href = "#"
        editNode.onclick = function(event){console.log(event.target); deleteItem(event.target); return false;}
        editNode.appendChild(document.createTextNode("DELETE"))
        editNode.className = "change-edit"
        detailNode.appendChild(document.createElement('br'))
        detailNode.appendChild(editNode)
        
        var grandTotal = document.createElement("p")
        grandTotal.appendChild(document.createTextNode("$" + this.amount * 1.50))



        // newOrder.appendChild(document.createTextNode(this.glaze));
        newOrder.appendChild(amountNode);
        newOrder.appendChild(detailNode)
        newOrder.appendChild(grandTotal)
     
        // myCartDiv.appendChild(newOrder);


        var checkOutElement = document.getElementById("checkout");
        myCartDiv.insertBefore(newOrder, checkOutElement);
    };
}

function addItem() {
    var flavorInput = document.getElementById("flavors");
    var flavorInputValue = flavorInput.options[flavorInput.selectedIndex].text;

    var glazeInput = document.getElementById("options");
    
    var glazeInputValue = glazeInput.options[glazeInput.selectedIndex].text;
    var amountInput = document.getElementById("choose-amount");
    
    var chooseAmountSection = document.getElementById("choose-amount");
    var radioButtons = document.getElementsByName("amount");

    for (let counter=0; counter<radioButtons.length; counter++)
    {
        console.log(radioButtons[counter])
        if (radioButtons[counter].checked){
            var amountInputValue = radioButtons[counter].value;
        }
    }


    var newOrder = new Order(flavorInputValue, glazeInputValue, amountInputValue);
    console.log('tetst', newOrder)
    console.log(newOrder.addToCart());


    var numberOfItems = document.getElementById("num-items")
    console.log(document.getElementsByClassName("order-1").length)
    numberOfItems.textContent = "items in cart: " + document.getElementsByClassName("order-1").length


    // newItem.appendChild(document.createTextNode(itemInput.value));
    // orderList.appendChild(newItem);
}

function deleteItem(clickedObject){
    clickedObject.parentElement.parentElement.remove();
    console.log("parent", clickedObject.parentElement.parentElement.parentElement)

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