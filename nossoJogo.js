/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta' 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */
alert("Bem-vindo ao jogo de Blackjack!");

let iniciarJogo = confirm("Quer iniciar uma nova rodada?");

if (iniciarJogo) {
    let cartaUsuario1 = comprarCarta();
    let cartaUsuario2 = comprarCarta();
    let carta1Computador = comprarCarta();
    let carta2Computador = comprarCarta();

    let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
    let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor;

    alert(`Cartas do Usuário: ${cartaUsuario1.texto} ${cartaUsuario2.texto} resultado: ${pontuacaoUsuario}`);
    alert(`Cartas do BOT: ${carta1Computador.texto} ${carta2Computador.texto} resultado: ${pontuacaoComputador}`);

    if (pontuacaoUsuario > pontuacaoComputador) {
        alert("Você ganhou! \nParabéns!");
    } else if (pontuacaoComputador > pontuacaoUsuario) {
        alert("Poooxa :'( \nO computador ganhou!");
    } else {
        alert("Deu Empate :O ");
    }
} else {
    alert("O jogo acabou.");
}