const imageEl = document.getElementById("fadingImage");
const images = [
    "images/personas_bailando_safaera.jpg",
    "images/personas_bailando_safaera2.jpg",
    "images/personas_bailando_safaera3.jpg",
    "images/personas_bailando_safaera4.jpg",
    "images/personas_bailando_safaera5.jpg",
    "images/personas_bailando_safaera6.jpg",
    "images/personas_bailando_safaera7.jpg",
    "images/personas_bailando_safaera8.jpg",
    "images/personas_bailando_safaera9.jpg",
];

window.setInterval(changePicture, 2000);
let i = 0;
const nimages = images.length
let nrandom = Math.floor(Math.random() * nimages)
let n=0
function changePicture() {
    nrandom = Math.floor(Math.random() * nimages)
    i++;
    // console.log(nrandom, n)
    if (n == nrandom) nrandom += 1
    imageEl.style.backgroundImage = `url(${images[nrandom]})`;
    // console.log("luego: ",nrandom, n)
    n = nrandom

    if (i > nimages - 1) i = 0;
}
