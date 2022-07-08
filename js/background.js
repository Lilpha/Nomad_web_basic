const images= ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img")

bgImg.src = `image/${chosenImage}`;
//새로 만든 이미지의 소스는 , 이미지폴더/chosenImage(예 : 0.jpg)
document.body.appendChild(bgImg);
//document.body 위치에 bgImg를 append(추가 시킵니다)