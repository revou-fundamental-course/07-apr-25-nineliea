function replaceName () {
    let name = prompt("Siapakan nama anda?", "")
    if (prompt ==""){
        alert "Nama tidak boleh kosong!"

        return false
    }
    else {
        document.getElementById('name').innerHTML = nama
    }
}

document.getElementById('submit').addEventListener('click', function () {
    replaceName()
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