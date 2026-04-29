//  SEARCH FIX
document.getElementById("searchInput").addEventListener("keyup", function () {
    let input = this.value.toLowerCase();
    let items = document.querySelectorAll(".searchable");

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "" : "none";
    });
});

//  carousel des images
let index = 0;
let track = document.getElementById("track");

function moveSlide() {
    index++;
    if (index >= track.children.length) index = 0;
    track.style.transform = "translateX(-" + index * 100 + "%)";
}
setInterval(moveSlide, 3000);

//  ADD IMAGE
function addSlide() {
    let file = document.getElementById("imageInput").files[0];
    if (!file) return;

    let reader = new FileReader();

    reader.onload = function (e) {
        let div = document.createElement("div");
        div.className = "carousel-slide";
        div.innerHTML = `<img src="${e.target.result}">`;
        track.appendChild(div);
    }

    reader.readAsDataURL(file);
}
