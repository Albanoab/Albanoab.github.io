const container = document.getElementById("container");
const image = document.getElementById("image");
const images = [
"../proyecto_final_vf/imagenes/AI/img1.png", 
"../proyecto_final_vf/imagenes/AI/img2.png", 
"../proyecto_final_vf/imagenes/AI/img3.png",
"../proyecto_final_vf/imagenes/AI/img4.png",
"../proyecto_final_vf/imagenes/AI/img5.png",
"../proyecto_final_vf/imagenes/AI/img6.png",
"../proyecto_final_vf/imagenes/AI/img7.png",
"../proyecto_final_vf/imagenes/AI/img8.png",
"../proyecto_final_vf/imagenes/AI/img9.png",
"../proyecto_final_vf/imagenes/AI/img10.png",
"../proyecto_final_vf/imagenes/AI/img11.png",
"../proyecto_final_vf/imagenes/AI/img12.png",
"../proyecto_final_vf/imagenes/AI/img13.png",
"../proyecto_final_vf/imagenes/AI/img14.png",
"../proyecto_final_vf/imagenes/AI/img15.png",
"../proyecto_final_vf/imagenes/AI/img16.png",
"../proyecto_final_vf/imagenes/AI/img17.png",
"../proyecto_final_vf/imagenes/AI/img18.png",
"../proyecto_final_vf/imagenes/AI/img19.png",
"../proyecto_final_vf/imagenes/AI/img20.png",
"../proyecto_final_vf/imagenes/AI/img21.png",
"../proyecto_final_vf/imagenes/AI/img22.png",
"../proyecto_final_vf/imagenes/AI/img23.png",
"../proyecto_final_vf/imagenes/AI/img24.png",
"../proyecto_final_vf/imagenes/AI/img25.png",
"../proyecto_final_vf/imagenes/AI/img26.png",
"../proyecto_final_vf/imagenes/AI/img27.png",
"../proyecto_final_vf/imagenes/AI/img28.png",
"../proyecto_final_vf/imagenes/AI/img29.png",
"../proyecto_final_vf/imagenes/AI/img30.png",
"../proyecto_final_vf/imagenes/AI/img31.png",
"../proyecto_final_vf/imagenes/AI/img32.png",
"../proyecto_final_vf/imagenes/AI/img33.png",
"../proyecto_final_vf/imagenes/AI/img34.png",
"../proyecto_final_vf/imagenes/AI/img35.png",
"../proyecto_final_vf/imagenes/AI/img36.png",
"../proyecto_final_vf/imagenes/AI/img37.png",
"../proyecto_final_vf/imagenes/AI/img38.png",
"../proyecto_final_vf/imagenes/AI/img39.png",
"../proyecto_final_vf/imagenes/AI/img40.png",
"../proyecto_final_vf/imagenes/AI/img41.png",
"../proyecto_final_vf/imagenes/AI/img42.png",
"../proyecto_final_vf/imagenes/AI/img43.png",
"../proyecto_final_vf/imagenes/AI/img44.png",
"../proyecto_final_vf/imagenes/AI/img45.png",
"../proyecto_final_vf/imagenes/AI/img46.png",
"../proyecto_final_vf/imagenes/AI/img47.png",
"../proyecto_final_vf/imagenes/AI/img48.png",
"../proyecto_final_vf/imagenes/AI/img49.jpeg",

];


let currentImage = 0;

image.src = images[0];
image.style.opacity = 0;
setTimeout(() => {
  image.style.opacity = 1;
}, 1000);

setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  image.style.opacity = 0;
  setTimeout(()=>{
    image.src = images[currentImage];
    image.style.opacity = 1;
  },2000)
}, 5000);