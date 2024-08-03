let bg = document.querySelectorAll(".flex");

for (let i = 0; i < bg.length; i++) {
    bg[i].style.backgroundImage = `url(Asserts/flex_${i + 1}.PNG)`;

}
let point = document.querySelectorAll('div');
point.forEach((e) => e.style.cursor = "pointer")

// let slide = document.querySelectorAll(".slide_item");

// slide.forEach(e => {
//     e.addEventListener("click", () => {
//         e.classList.add("autoSlide")
//     })
// })