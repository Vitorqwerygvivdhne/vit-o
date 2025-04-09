document.addEventListener('DOMContentLoaded', function () {
    
let tamanhoFonteAtual = 1;

const aumentaFonteBotao = document.getElementById('aumentar-fonte');

aumentaFonteBotao.addEventListener('click', function () {
    tamanhoFonteAtual += 0.1;
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

diminuiFonteBotao.addEventListener('click', function () {
    tamanhoFonteAtual -= 0.1;
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})

    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById ('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    })

    const alternaCor = document.getElementById('alterna-contraste')

        alternaCor.addEventListener('click', function (){
            document.body.classList.toggle('alto-contraste')

        })



})
