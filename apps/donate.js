


document.getElementById("noakhali-donate")
.addEventListener("click", function(){
    // getting
    let total = getTextValueFromId("noakhali-total")
    const input = getInputValueFromId("noakhali-input")
    // adding
    const newTotal = total + input;
    // setting
    grandTotalFun(input)
    document.getElementById("noakhali-total").innerText = newTotal;
    // historing
    addElement(input, "noakhali-heading");


})


document.getElementById("feni-donate")
.addEventListener("click", function(){
    // getting
    let total = getTextValueFromId("feni-total");
    const input = getInputValueFromId("feni-input");
    // adding
    const newTotal = total + input;
    // setting
    grandTotalFun(input);
    document.getElementById("feni-total").innerText = newTotal;
    // historing
    addElement(input, "feni-heading")
})


document.getElementById("quota-donate")
.addEventListener("click", function(){
    // getting
    let total = getTextValueFromId("quota-total")
    const input = getInputValueFromId("quota-input")
    // adding
    const newTotal = total + input;
    // setting
    grandTotalFun(input)
    document.getElementById("quota-total").innerText = newTotal;
    // historing
    addElement(input, "quota-heading")
})
