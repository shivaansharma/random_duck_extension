
const imageNumber = Math.floor(Math.random() * 200) + 1;
const gifNumber = Math.floor(Math.random() * 100) + 1;
console.log(imageNumber);


const gifOrImg = Math.floor(Math.random() * 2) + 1;
console.log(gifOrImg);

let div = document.querySelector("div");

if (gifOrImg == 1) {
    let url = `https://random-d.uk/api/${gifNumber}.gif`;
    let img = document.createElement("img");
    img.setAttribute('src', url);
    div.appendChild(img); 
} else {
    let url = `https://random-d.uk/api/${imageNumber}.jpg`;
    let img = document.createElement("img");
    img.setAttribute('src', url);
    div.appendChild(img); 
}
