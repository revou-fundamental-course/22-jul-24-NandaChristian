function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Selamat Pagi, Pelanggan!";
    } else if (hour >= 12 && hour < 15) {
        greeting = "Selamat Siang, Pelanggan!";
    } else if (hour >= 15 && hour < 18) {
        greeting = "Selamat Sore, Pelanggan!";
    } else {
        greeting = "Selamat Malam, Pelanggan!";
    }

    return greeting;
}

document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = getGreeting();
});

// slide

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}