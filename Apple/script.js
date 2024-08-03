let bg = document.querySelectorAll(".flex");

for (let i = 0; i < bg.length; i++) {
    bg[i].style.backgroundImage = `url(Asserts/flex_${i + 1}.PNG)`;
    bg[i].addEventListener("click", () => {
        window.location.href = "index.html"
    })
}
let point = document.querySelectorAll('div');
point.forEach((e) => e.style.cursor = "pointer")
