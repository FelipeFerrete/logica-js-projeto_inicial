alert('Boas vindas ao jogo do numero secreto!');
let numeroSecreto = 5;
console.log (numeroSecreto);
let chute;
let tentativas = 1;


//while
while (chute != numeroSecreto) {
    chute = prompt('escolha um numero entre 0 e 10');
    // Se numero foi igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Parebens, acertou!! ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);     
        }
        //tentativas = tentativas + 1;
        tentativas++
    }
}
