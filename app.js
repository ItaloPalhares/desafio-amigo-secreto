let listaDeAmigos = [];

//Ação do botão Adicionar Amigo
function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector('input').value

    //checa se o nome está presente na lista ou está vazio
    if(listaDeAmigos.includes(nomeDoAmigo) || nomeDoAmigo == ''){
        //operador ternário para as duas possibilidades
        let respostaAlert =  nomeDoAmigo == ''? 'não pode estar vazio' : 'já presente na lista de participantes!';
        alert('Nome '+ respostaAlert)
        limparCampo();
        atualizaEExibeListaDeParticipantes()
        
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        limparCampo();
        atualizaEExibeListaDeParticipantes()
    }
}

//Ação do botão Sortear amigo
function sortearAmigo(){
    if(listaDeAmigos != null && listaDeAmigos.length >= 2){
        let participanteEscolhido = Math.floor(Math.random() * listaDeAmigos.length);
        let resultadoSorteio = listaDeAmigos[participanteEscolhido];
        document.getElementById('resultado').innerHTML = 'O seu amigo secreto é '+ resultadoSorteio;
    } else { 
        alert('A lista não pode estar vazia, minimo de 2 participantes ativos!');
    }
}


//Função para exibir lista de participantes na tela e atualizar a Lista
function atualizaEExibeListaDeParticipantes(){
let listaAmigos = document.getElementById('listaAmigos');
listaAmigos.innerHTML = '';

listaDeAmigos.forEach(amigo => {
let li = document.createElement('li');
li.textContent = amigo;
listaAmigos.appendChild(li)

})

}

//função de limpeza do campo adicionar amigo
function limparCampo() {
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}