function updateSeatCount() {
  const selectedSeatCount = convertToIntegerValue("BookingSeatCount");

  //Set a condition to stop the seat selection when the its equal to 4
  if (selectedSeatCount >= 4) {
    alert("You already select maximum seat");
    return false;
  }
  //Available Seat Count
  const availableSeats = convertToIntegerValue("seatsLeft");
  document.getElementById("seatsLeft").innerText = availableSeats - 1;

  // Selected Seat Count
  document.getElementById("BookingSeatCount").innerText = selectedSeatCount + 1;

  return true;
}
