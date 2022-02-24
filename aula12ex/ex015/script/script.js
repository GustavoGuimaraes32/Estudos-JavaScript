function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        // Caso queira fazer o exercicio com foto
        // var img = document.createElement('img') -- CRIANDO UM ELEMENTO IMG
        // img.setAttribute('id', 'foto') -- COLOCAR UM ID PARA A VARIAVEL IMG

        if(fsex[0].checked)
        {
            genero = 'Homem'
        }
        else if (fsex[1].checked)
        {
            genero = 'Mulher'
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}