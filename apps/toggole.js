const toggoleButton = document.getElementById("btn-toggole");
const toggoleButtonEl = toggoleButton.getElementsByTagName("button");
const sectionDonation = document.getElementById("donation")
const sectionHistory = document.getElementById("history")


let previus = null
for (const singleButton of toggoleButtonEl) {
    singleButton.addEventListener("click", function(){
        if(previus == null){
            if(singleButton.innerText == "Donation"){
                sectionDonation.classList.remove("hidden")
                sectionHistory.classList.add("hidden")
            }else if(singleButton.innerText == "History") {
                sectionDonation.classList.add("hidden")
                sectionHistory.classList.remove("hidden")
            }
            singleButton.classList.remove("bg-transparent");
            singleButton.classList.add("bg-primary");
            previus = singleButton;
        }else{
            if(previus.innerText == "Donation"){
                sectionDonation.classList.remove("hidden")
                sectionHistory.classList.add("hidden")
            }else if(previus.innerText == "History") {
                sectionDonation.classList.add("hidden")
                sectionHistory.classList.remove("hidden")
            }
            if(singleButton.innerText == "Donation"){
                sectionDonation.classList.remove("hidden")
                sectionHistory.classList.add("hidden")
            }else if(singleButton.innerText == "History") {
                sectionDonation.classList.add("hidden")
                sectionHistory.classList.remove("hidden")
            }
            previus.classList.remove("bg-primary");
            previus.classList.add("bg-transparent")
            singleButton.classList.add("bg-primary");
            singleButton.classList.remove("bg-transparent")
            previus = singleButton;
        }
    })
}