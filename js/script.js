function displayDate() {
    document.getElementById("sub-sec-2").innerText += Date();
}
document.getElementById('sub-sec-1').addEventListener("click", displayDate);

