
function goToHomePage(){
    window.location.href = 'index.html';
    
}

function goToSuccessCard(){
    const customerName = document.getElementById("name").value;
    const customerMobileNumber = document.getElementById("mobileNumber").value;
    const customerEmail = document.getElementById("email").value;
    const selectedSeat = document.getElementById("BookingSeatCount").value;

    if(selectedSeat > 0 && customerName && customerMobileNumber){
        window.location.href = 'card.html';
    }
    else if(selectedSeat > 0 && customerName && customerMobileNumber && customerEmail){
        window.location.href = 'card.html';
    }
    else{
        alert("Please select at least one seat and fill out all required fields.");
    }

}