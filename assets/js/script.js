AOS.init({
  easing: "ease-out-back",
});

if (document.readyState == "complete") {
  AOS.refresh();
}


document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "hidden";

  var audio = document.getElementById("myAudio");
  var playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    if (audio.paused) {
      document.body.style.overflow = "auto";
      playButton.style.display = "none";

      var gallery = document.getElementById('gallery');
      gallery.scrollIntoView({ behavior: 'smooth' });

      audio.play();
    } else {
      audio.pause();
    }
  });
});