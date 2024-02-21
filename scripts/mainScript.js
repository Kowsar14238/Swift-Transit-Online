
const allSeat = document.getElementsByClassName("selectSeat");

for(const seat of allSeat){
    seat.addEventListener("click", function(event){
        
        // Check if seat selection is allowed
        if (!updateSeatCount()) {
            return; // Stop further execution
        }

        const seatNumber = event.target.querySelector('span').innerText;
        // console.log(seatNumber);
        const selectSeatContainer = document.querySelector(".selectSeatTable");
        const price = 550;

        //After select the seat
        event.target.setAttribute("disabled", false);

        //Add seat details to the booking list start
        const div = document.createElement("div");
        div.classList.add("grid");
        div.classList.add("grid-flow-col");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatNumber;
        p2.innerText = "Economy";
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectSeatContainer.appendChild(div);
        //Add seat details to the booking list End

        updateTotalPrice(price);
        updateGrandTotalPrice();
    });
}


