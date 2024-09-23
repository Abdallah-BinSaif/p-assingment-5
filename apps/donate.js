// Noakhali Donation
document.getElementById("noakhali-donate")
.addEventListener("click", function(){

    updateDonate("noakhali-total", "noakhali-input")
    const input = getInputValueFromId("noakhali-input")
    grandTotalFun(input)
    addElement(input, "noakhali-heading");

})

// Feni Donation
document.getElementById("feni-donate")
.addEventListener("click", function(){

    updateDonate("feni-total", "feni-input");
    const input = getInputValueFromId("feni-input");
    grandTotalFun(input);
    addElement(input, "feni-heading")

})

// Quota Donation
document.getElementById("quota-donate")
.addEventListener("click", function(){

    updateDonate("quota-total", "quota-input")
    const input = getInputValueFromId("quota-input")
    grandTotalFun(input)
    addElement(input, "quota-heading")

})
