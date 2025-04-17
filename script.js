// UNTUK TRANSITION 
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

// UNTUK NAVIGATION WITHOUT RELOAD
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
});

// UNTUK MUNCULIN USERNAME KE WELCOMING SPEECH
const savedInitial = localStorage.getItem("userInitial");
if (savedInitial){
    document.getElementById("userInitial").innerHTML=savedInitial;
}

// UNTUK IMAGE CAROUSEL TRANSITION
let banners = document.querySelectorAll(".banner-img");
  let current = 0;

  setInterval(() => {
    banners[current].classList.remove("active");
    current = (current + 1) % banners.length;
    banners[current].classList.add("active");
  }, 3000); // TIAP 3 DETIK GANTI GAMBAR


// UNTUK VALIDASI FORM
  function validateForm () {
    const nama = document.forms["message-form"]["name-input"].value

    if (nama == ""){
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"  
    
        return false;
    }
    else{
        document.getElementById("name").innerHTML = nama;

        return false;
    }
}

// UNTUK SUBMIT FORM TANPA RELOAD WEBSITE
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // AMBIL ELEMEN INPUT FORM
    const name = document.getElementById('name');
    const dob = document.getElementById('dob');
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message');

    // Ambil ELEMEN SPAN ERROR MESSAGE
    const nameErr = document.getElementById('name-error');
    const dobErr = document.getElementById('dob-error');
    const genderErr = document.getElementById('gender-error');
    const messageErr = document.getElementById('message-error');

    // RESET ERROR MESSAGE
    nameErr.textContent = '';
    dobErr.textContent = '';
    genderErr.textContent = '';
    messageErr.textContent = '';

    // VALIDASI ERROR MESSAGE
    let valid = true;

    if (name.value.trim() === '') {
        nameErr.textContent = 'Name is required. Minimum 4 letters';
        valid = false;
    }

    if (dob.value === '') {
        dobErr.textContent = 'Date of birth is required.';
        valid = false;
    }

    if (!gender) {
        genderErr.textContent = 'Please select your gender.';
        valid = false;
    }

    if (message.value.trim() === '') {
        messageErr.textContent = 'Message is required. Minimum 10 letters';
        valid = false;
    }

    if (!valid) return; // STOP KALO ADA ERROR

    // UNTUK TAMBAHIN HASIL INPUT FORM KE TABLE OUTPUT
    const currentTime = new Date().toLocaleString();
    const table = document.getElementById('messageTable').querySelector('tbody');
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${currentTime}</td>
        <td>${name.value.trim()}</td>
        <td>${dob.value}</td>
        <td>${gender.value}</td>
        <td>${message.value.trim()}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    // UNTUK RESET FORM
    document.getElementById('messageForm').reset();
});

// UNTUK TOMBOL DELETE DI TABLE OUTPUT
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
