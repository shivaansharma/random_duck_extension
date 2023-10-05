const imageNumber = Math.floor(Math.random() * 200) + 1;
const gifNumber = Math.floor(Math.random() * 50) + 1;
const gifOrImg = Math.floor(Math.random() * 2) + 1;
const div = document.querySelector("div");

// Define a common URL prefix
const urlPrefix = "https://random-d.uk/api/";

// Create an image element
const img = document.createElement("img");
img.style.width = '400px'; 
img.style.height = '400px'; 

// Determine the URL based on gifOrImg
let url;
if (gifOrImg === 1) {
    url = `${urlPrefix}${gifNumber}.gif`;
} else {
    url = `${urlPrefix}${imageNumber}.jpg`;
}

// Set the src attribute and append the image to the div
img.setAttribute('src', url);
div.appendChild(img);
