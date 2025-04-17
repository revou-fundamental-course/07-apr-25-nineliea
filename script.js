window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
  
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
  
        if (target) {
          const offset = 100; // same as your scroll-padding-top
          const topPos = target.offsetTop - offset;
  
          window.scrollTo({
            top: topPos,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
const savedInitial = localStorage.getItem("userInitial");
if (savedInitial){
    document.getElementById("userInitial").innerHTML=savedInitial;
}

let banners = document.querySelectorAll(".banner-img");
  let current = 0;

  setInterval(() => {
    banners[current].classList.remove("active");
    current = (current + 1) % banners.length;
    banners[current].classList.add("active");
  }, 3000); // change image every 3 seconds

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

document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil elemen input
    const name = document.getElementById('name');
    const dob = document.getElementById('dob');
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message');

    // Ambil elemen span untuk error
    const nameErr = document.getElementById('name-error');
    const dobErr = document.getElementById('dob-error');
    const genderErr = document.getElementById('gender-error');
    const messageErr = document.getElementById('message-error');

    // Reset error messages
    nameErr.textContent = '';
    dobErr.textContent = '';
    genderErr.textContent = '';
    messageErr.textContent = '';

    // Validasi manual
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

    if (!valid) return; // Hentikan jika ada error

    // Tambahkan ke tabel jika semua valid
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

    // Reset form
    document.getElementById('messageForm').reset();
});

// Fungsi hapus baris
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
