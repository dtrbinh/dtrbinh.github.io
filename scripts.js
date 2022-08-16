const body = document.querySelector("body");
if (body) {
    console.log("body found");
    body.addEventListener("click", toggleColor, true);
}

// toggle class on <body>
function toggleColor(e) {
    body.classList.toggle("dark");
}
