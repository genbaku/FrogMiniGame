const froggy = document.getElementById('frogButton');
const resetButton = document.getElementById("resetButtonA");
var jumpCountDisplay = document.getElementById("jumpCountDisplay");
var jumpCount = localStorage.getItem("jumpCount") || 0;

froggy.addEventListener("click", function() {
    jumpCount++;    
    localStorage.setItem("jumpCount", jumpCount);
    jumpCountDisplay.textContent = "Jumped times: " + jumpCount;
});

function moveButton() {
    var x = Math.random() * (window.innerWidth - 150);
    var y = Math.random() * (window.innerHeight - 150);
    froggy.style.left = `${x}px`;
    froggy.style.top = `${y}px`;
}

function resetButtonB() {
    jumpCount = 0;
    localStorage.setItem("jumpCount", jumpCount);
    jumpCountDisplay.textContent = "Jumped times: " + jumpCount;
    froggy.removeAttribute('style');
};

jumpCountDisplay.textContent = "Jumped times: " + jumpCount;