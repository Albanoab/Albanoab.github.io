var video = document.getElementById("bg-video");

video.addEventListener("loadedmetadata", function() {
  this.currentTime = 1;
});

video.addEventListener("ended", function() {
  this.currentTime = 1;
  this.play();
});