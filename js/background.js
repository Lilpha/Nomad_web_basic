const images= ["0.jpg","1.jpg","2.jpg"];

const chooseImage = images[Math.floor(Math.random() * images.length)]
document.body.style.backgroundImage = `url("image/${chooseImage}")`;

var img = document.createElement("img");
img.src = `image/${chooseImage}`;
img.classList.add("hidden");
img.id = "img2";
document.body.appendChild(img);

