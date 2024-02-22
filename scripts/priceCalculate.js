function updateTotalPrice(value) {
  const totalCost = convertToIntegerValue("totalPrice");

  const updateCost = totalCost + parseInt(value);
  document.getElementById("totalPrice").innerText = updateCost;
}

function updateGrandTotalPrice(status) {
  const totalCost = convertToIntegerValue("totalPrice");

  if (status == undefined) {
    document.getElementById("grandTotalPrice").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("couponCode").value;

    if (couponCode == "NEW15") {
      const discountPrice = totalCost * 0.15;

      document.getElementById("grandTotalPrice").innerText =
        totalCost - discountPrice;
    } else if (couponCode == "Couple20") {
      const discountPrice = totalCost * 0.2;

      document.getElementById("grandTotalPrice").innerText =
        totalCost - discountPrice;
    } else {
      alert("Please enter a valid coupon code");
    }
  }
}
