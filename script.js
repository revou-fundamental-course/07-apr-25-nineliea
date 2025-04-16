window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

const savedInitial = localStorage.getItem("userInitial");
if (savedInitial){
    document.getElementById("userInitial").innerHTML=savedInitial;
}

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
  