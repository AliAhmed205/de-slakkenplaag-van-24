document.addEventListener('DOMContentLoaded', function () {

  if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
    document.body.classList.add('safari-browser');
  }

  for (let i = 0; i < 100; i++) {
    let slak = document.createElement("div");
    let slakImg = document.createElement("img");
    const homeSection = document.getElementsByClassName('homepage')[0];

    slakImg.src = "./IMG/slug.png";
    slak.appendChild(slakImg);

    let slakX = Math.random();
    let slakDelay = Math.random();
    let slakDuration = Math.random();

    slak.style.setProperty("--x", slakX);
    slak.style.setProperty("--delay", slakDelay);
    slak.style.setProperty("--dur", slakDuration);

    slak.onanimationend = removeSlak;

    if (homeSection) {
      homeSection.appendChild(slak);
    }
  }

  function removeSlak(e) {
    e.target.remove();
  }
})

// Slakken-teller 

