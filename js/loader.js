// Simulate loading process
window.addEventListener("load", function () {
    const mainLoader= document.getElementById("main-loader");
    mainLoader.classList.add("fade-out");
    setTimeout(() => {
        mainLoader.style.display = "none"; // Hide loader
    }, 3000);
});
