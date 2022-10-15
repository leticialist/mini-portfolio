const abas = document.querySelectorAll('.aba')

abas.forEach(aba => {
    aba.addEventListener('click', function() {
        if(aba.classList.contains('selecionado')) {
            return;
        }

        selecionarAba(aba)
        mostrarInfoAbas(aba)
    })
})

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector('.aba.selecionado')
    abaSelecionada.classList.remove('selecionado')
    aba.classList.add('selecionado')
}

function mostrarInfoAbas(aba) {
    const infoSelecionada = document.querySelector('.informacao.selecionado')
    infoSelecionada.classList.remove('selecionado')

    const idInfoAbas = `informacao-${aba.id}`
    const informacaoMostrar = document.getElementById(idInfoAbas)
    informacaoMostrar.classList.add('selecionado')
}