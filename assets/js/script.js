AOS.init({
  easing: "ease-out-back",
  // duration: 1000
});

if (document.readyState == "complete") {
  AOS.refresh();
}


document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('myAudio');
  audio.play();
});