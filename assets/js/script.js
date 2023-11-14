document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const home = document.querySelector("#home");
  if (home) {
    home.scrollIntoView({ behavior: "smooth" });
  }

  const openInvitation = localStorage.getItem("openInvitation");
  if (openInvitation === null) {
    localStorage.setItem("openInvitation", "false");
  }

  const btnOpenInvitation = document.querySelector("#btnOpenInvitation");
  if (btnOpenInvitation) {
    if (openInvitation === "true") {
      document.body.style.overflow = "auto";
      btnOpenInvitation.style.display = "none";
    } else {
      document.body.style.overflow = "hidden";
      btnOpenInvitation.style.display = "block";
    }

    btnOpenInvitation.addEventListener("click", function (e) {
      e.preventDefault();

      localStorage.setItem("openInvitation", "true");
      document.body.style.overflow = "auto";
      btnOpenInvitation.style.display = "none";

      const gallery = document.querySelector("#gallery");
      if (gallery) {
        gallery.scrollIntoView({ behavior: "smooth" });
      }

      const audio = document.querySelector("#audio");
      if (audio) {
        audio.play();
      }
    });
  }

  window.addEventListener("beforeunload", function () {
    localStorage.clear();
  });
});
