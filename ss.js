function cnh() {
    let nomeUsuario = prompt("Digite seu nome");
    console.log("O nome do usuario é: " + nomeUsuario);
    let idadeUsuario;

    while
     = parseInt(prompt("Digite sua idade"));
    console.log("A idade do usuario é: " + idadeUsuario);

    if (isNaN(idadeUsuario) || idadeUsuario <=0 ) {
        alert("Por favor, insira uma idade valida!");
    }

    if (idadeUsuario >= 18) {
        alert(nomeUsuario + ", você esta apto a tirar a CNH!");
    } else {
        alert(nomeUsuario + ", você não esta apto a tirar a CNH!");
    }

}