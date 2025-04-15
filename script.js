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