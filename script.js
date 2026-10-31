
function validateForm() {

    var name = document.getElementById("name").value.trim();
    var roll = document.getElementById("roll").value.trim();
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value.trim();

    var gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    var msg = document.getElementById("message");

    msg.style.color = "red";

    // Check empty fields
    if (name == "" || roll == "" || course == "" ||
        email == "" || mobile == "" || dob == "" ||
        address == "" || gender == null) {

        msg.innerHTML = "Please fill all the fields.";
        return false;
    }

    // to check if name contains alphabets only
    var namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        msg.innerHTML = "Name should contain alphabets only.";
        return false;
    }

    // to check if roll number contains numbers only
    var rollPattern = /^[0-9]+$/;

    if (!rollPattern.test(roll)) {
        msg.innerHTML = "Roll number should contain numbers only.";
        return false;
    }

    // to check email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        msg.innerHTML = "Please enter a valid email.";
        return false;
    }

    // to check mobile number
    var mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        msg.innerHTML = "Mobile number must contain 10 digits.";
        return false;
    }

    // to show success message
    msg.style.color = "green";
    msg.innerHTML = "Registration Successful!";

    return false;
}
