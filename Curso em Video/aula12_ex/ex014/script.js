function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha.jpg'
        document.body.style.background = "rgb(109, 147, 216)"
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = "rgb(198, 128, 48)"
    } else {
        //Boa noite!
        img.src = 'noite.jpg'
        document.body.style.background = "rgb(63, 54, 43)"
    }
}