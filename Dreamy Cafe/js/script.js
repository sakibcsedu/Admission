function showDeliveryAddress() {
    var x = document.getElementById("deliveryAddress");
    x.style.display = "block";
}

function hideDeliveryAddress() {
    var x = document.getElementById("deliveryAddress");
    x.style.display = "none";
}

function validateRegistrationForm() {
    // Input Name
    let name = document.forms["registrationForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Password Validation
    let password = document.forms["registrationForm"]["password"].value;
    if (password == "") {
        alert("Password must be filled out"); 
        return false;
    }
    if (password.length < 7) {
        alert("Password must be 7 characters long"); 
        return false;
    }

}

function showPaymentInformation() {
    var x = document.getElementById("payment");
    x.style.display = "block";
}

function hidePaymentInformation() {
    var x = document.getElementById("payment");
    x.style.display = "none";
}

function checkBillingAddress() {
    let deliveryAddress = document.getElementById('deliveryAdd').value;
    let billingAddress = document.getElementById('billingAdd');
    let checkBox = document.getElementById("myCheck");

    if (checkBox.checked == true && deliveryAddress !==""){
        billingAddress.value = deliveryAddress; 
    } else {
        alert('Please Fill Up Your Delivery Address');
        return checkBox.checked = false;
    }
}

// Card selection
function selectVisaCard() {
    document.getElementById('visaCard').style.display = "block";
    document.getElementById('masterCard').style.display = "none";
    document.getElementById('americanExpress').style.display = "none";
}
function selectMasterCard() {
    document.getElementById('visaCard').style.display = "none";
    document.getElementById('masterCard').style.display = "block";
    document.getElementById('americanExpress').style.display = "none";
}
function selectAmericanExpressCard() {
    document.getElementById('visaCard').style.display = "none";
    document.getElementById('masterCard').style.display = "none";
    document.getElementById('americanExpress').style.display = "block";
}

// Post Code Validation In Order Page
function validateOrderForm() {
    let postCode = document.getElementById("postCode").value;
    if (postCode.length < 4) {
        alert("Post Code must be 4 digits long");
        return false;
    }
    return true;
}