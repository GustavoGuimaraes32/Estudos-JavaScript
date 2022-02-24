function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12)
    {
        // BOM DIA
        img.src = 'img/manha.png'
        document.body.style.background = 'linear-gradient(0deg, rgba(196,232,254,1) 30%, rgba(58,164,238,1) 100%)'
    }
    else if (hora >= 12 && hora < 18)
    {
        // BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = 'linear-gradient(0deg, rgba(236,172,97,1) 0%, rgba(240,123,6,1) 100%)'
    }
    else
    {
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = 'linear-gradient(0deg, rgba(63,143,225,1) 0%, rgba(3,29,56,1) 100%)'
    }
}
