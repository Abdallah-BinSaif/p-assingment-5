function getTextValueFromId (id){
    const text = document.getElementById(id).innerText;
    const textNumber = Number(text);
    return textNumber
}
function getInputValueFromId (id){
    const text = document.getElementById(id).value;
    const textNumber = Number(text);
    return textNumber
}

function grandTotalFun (input){
    const newGrandTotal = getTextValueFromId("g-total") - input;
    document.getElementById("g-total").innerText = newGrandTotal;
}

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
    const now = new Date()
    const h = document.getElementById("noakhali-heading").innerText;
    const newItem = `
    <div class="border-2 rounded-3xl p-8">
          <p class="font-extrabold text-xl">
            ${input} Taka is ${h}
          </p>
          <p class="text-fontcolor text-base">${now}</p>
    </div>
    `
    document.getElementById("history").innerHTML += newItem;


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
    const now = new Date()
    const h = document.getElementById("feni-heading").innerText;
    const newItem = `
    <div class="border-2 rounded-3xl p-8">
          <p class="font-extrabold text-xl">
            ${input} Taka is ${h}
          </p>
          <p class="text-fontcolor text-base">${now}</p>
    </div>
    `
    document.getElementById("history").innerHTML += newItem;
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
    const now = new Date()
    const h = document.getElementById("quota-heading").innerText;
    const newItem = `
    <div class="border-2 rounded-3xl p-8">
          <p class="font-extrabold text-xl">
            ${input} Taka is ${h}
          </p>
          <p class="text-fontcolor text-base">${now}</p>
    </div>
    `
    document.getElementById("history").innerHTML += newItem;


})
