// Sapaan Otomatis
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


//Form Validation 
function validateForm() {
    let isValid = true;
    
    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('saranError').innerText = '';
    
    // Validate name
    const name = document.getElementById('nama').value;
    if (name === '') {
        document.getElementById('nameError').innerText = 'Nama harus diisi';
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email harus diisi';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Email tidak valid';
        isValid = false;
    }
    
    // Validate saran
    const saran = document.getElementById('saran').value;
    if (saran === '') {
        document.getElementById('saranError').innerText = 'Saran harus diisi';
        isValid = false;
    }
    
    return isValid;
}

function submitForm(event) {
    event.preventDefault(); // Mencegah halaman merefresh
    
    if (validateForm()) {
        // mereset form
        document.getElementById('mainForm').reset();
        
        // show a success message
        alert('Form telah dikirim');
    }
}

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

// Navbar Scroll
let prevScrollPos = window.scrollY;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-50px"; // Sesuaikan nilai ini dengan tinggi navbar Anda
  }
  
  prevScrollPos = currentScrollPos;
}
