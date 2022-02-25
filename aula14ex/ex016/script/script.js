function calcular()
{
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert('[ERRO] - Verifique seus dados e tente novamente!')
        res.innerHTML = 'Impossível realizar o calculo!'
    }
    else
    {
        res.innerHTML = 'Contando: <br>'

        if(Number(passo.value) <= 0)
        {
            window.alert('Passo inválido! Considerando passo 1')
            Number(passo.Number) = 1
        }

        if(Number(inicio.value) < Number(fim.value))
        {
            //Contagem Crescente
            for(var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value))
            {
                res.innerHTML += ` ${c} \u{1F449}`
            }

            res.innerHTML += ` \u{1F3C1}`
        }

        else
        {
            //Contagem Regressiva
            for(var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value))
            {
                res.innerHTML += ` ${c} \u{1F449}`
            }

            res.innerHTML += ` \u{1F3C1}`
        }
        
    }
}