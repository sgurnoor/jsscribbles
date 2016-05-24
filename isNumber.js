function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    document.getElementById("num").style.borderColor = "red";
    document.getElementById("ans").innerHTML = "<p style='color:red'>Please enter a digit between 0 and 9</p>";
        return false;
    }
    document.getElementById("num").style.borderColor = null;
    document.getElementById("ans").innerHTML = "";
    return true;
}