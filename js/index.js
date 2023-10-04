

// Function to calculate the total OBC service amount
function calculateOBCTotal() {
    // Get the quantity and unitary price input elements
    var quantityInput = document.getElementById("quantityOBC");
    var unitaryPriceInput = document.getElementById("unitaryPriceOBC");

    // Get the amount input element where the result will be displayed
    var amountEuroInput = document.getElementById("amountEuroOBC");

    // Convert input values to numbers
    var quantity = parseFloat(quantityInput.value) || 0;
    var unitaryPrice = parseFloat(unitaryPriceInput.value) || 0;

    // Calculate the total amount
    var totalAmount = quantity * unitaryPrice;

    // Update the amount input with the result
    amountEuroInput.value = totalAmount.toFixed(2); // Display the result with two decimal places
}
// Attach the function to the input fields' change events
document.getElementById("quantityOBC").addEventListener("input", calculateOBCTotal);
document.getElementById("unitaryPriceOBC").addEventListener("input", calculateOBCTotal);

//function to calculate the total amount
function calculateTotalAmount() {
    var totalTransInp = document.getElementById("totalT");
    var totalHotInp = document.getElementById("totalH");
    var totalLunchInp = document.getElementById("totalL");
    var totalAInp = document.getElementById("amountEuroOBC");

    var Ttransp = parseFloat(totalTransInp.value) || 0;
    var Thotel = parseFloat(totalHotInp.value) || 0;
    var Tlunch = parseFloat(totalLunchInp.value) || 0;
    var totalOBC = parseFloat(totalAInp.value) || 0;

    // Check if any of the required inputs are missing or invalid
    if (isNaN(Ttransp) || isNaN(Thotel) || isNaN(Tlunch) || isNaN(totalOBC)) {
        console.log("One or more input values are invalid or missing.");
        return;
    }

    var totalNetE = Ttransp + Thotel + Tlunch + totalOBC;
    console.log(totalNetE);

    var totalNetInp = document.getElementById("totalNet");
    totalNetInp.value = totalNetE.toFixed(2);

    var vat = totalNetE * 0.25;

    var totalAmountInp = document.getElementById("totalAmount");
    totalAmountInp.value = (totalNetE + vat).toFixed(2);
}

document.getElementById("totalH").addEventListener("input", calculateTotalAmount);
document.getElementById("totalL").addEventListener("input", calculateTotalAmount);
document.getElementById("totalT").addEventListener("input", calculateTotalAmount);













