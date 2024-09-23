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

function addElement (input, heading){
    console.log("inside from function")
    const now = new Date();
    const h = document.getElementById(heading).innerText;
    console.log(h)
    const newItem = `
    <div class="border-2 rounded-3xl p-8">
          <p class="font-extrabold text-xl">
            ${input} Taka is ${h}
          </p>
          <p class="text-fontcolor text-base">${now}</p>
    </div>
    `
    document.getElementById("history").innerHTML += newItem;
}