
// Noakhali Donation
document.getElementById("noakhali-donate")
.addEventListener("click", function(){
    
    const input = getInputValueFromId("noakhali-input")
    console.log(input)

    if (isNaN(input)){
        
        return alert("please enter valid amount")

    }else if(input > getTextValueFromId("g-total")){

        return alert("You have not enough money to donate")
        
    }else if ( input < 0){

        return alert("You must donate positive amount")

    }else if(input == 0){

        return alert("empty")

    }else {
        document.getElementById("my_modal_1").showModal()

    }

    updateDonate("noakhali-total", "noakhali-input")
    grandTotalFun(input)
    addElement(input, "noakhali-heading");

})

// Feni Donation
document.getElementById("feni-donate")
.addEventListener("click", function(){

    const input = getInputValueFromId("feni-input");
    if (isNaN(input)){

        return alert("please enter valid amount")

    }else if(input > getTextValueFromId("g-total")){

        return alert("You have not enough money to donate")
        
    }else if ( input < 0){

        return alert("You must donate positive amount")

    }else if(input == 0){

        return alert("empty")

    }else {

        document.getElementById("my_modal_1").showModal()

    }
    updateDonate("feni-total", "feni-input");
    grandTotalFun(input);
    addElement(input, "feni-heading")

})

// Quota Donation
document.getElementById("quota-donate")
.addEventListener("click", function(){ 
    const input = getInputValueFromId("quota-input")
    if (isNaN(input)){

        return alert("please enter valid amount")

    }else if(input > getTextValueFromId("g-total")){

        return alert("You have not enough money to donate")
        
    }else if ( input < 0){

        return alert("You must donate positive amount")

    }else if(input == 0){

        return alert("empty")

    }else {

        document.getElementById("my_modal_1").showModal()

    }


    updateDonate("quota-total", "quota-input")
    grandTotalFun(input)
    addElement(input, "quota-heading")

})
