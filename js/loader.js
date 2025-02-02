
// function disableScroll() {
//     document.body.style.overflow = "hidden";
// }

// // Function to enable scrolling
// function enableScroll() {
//     document.body.style.overflow = "auto";
// }

// // Call disableScroll when page starts loading
// disableScroll();

// Simulate loading process
window.addEventListener("load", function () {
    const mainLoader= document.getElementById("main-loader");
    mainLoader.classList.add("fade-out");
    setTimeout(() => {
        mainLoader.style.display = "none"; // Hide loader
        // enableScroll(); 
    }, 3000);
});
