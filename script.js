const imgLarge = document.querySelector("#large-img");
const productImages = document.querySelectorAll(".img-small img");

productImages.forEach((image) => {
    image.addEventListener("click", (e) => {
        let src = e.target.getAttribute("src");
        imgLarge.src = src;
    })
})