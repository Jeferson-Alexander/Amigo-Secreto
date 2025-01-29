alert ('Este jogo sera do amigo secreto');
let amigos= [];

function adicionarAmigo(){
    const inputNome = document.getElementById('amigo');
    const nomeAmigo = inputNome.value;

    if (nomeAmigo === ''){
        alert ('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    document.getElementById('amigo').value = '';
    //inputNome.value = '';
   }
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
  
    amigos.forEach(nome => {
      const itemLista = document.createElement('li');
      itemLista.textContent = nome;
      lista.appendChild(itemLista);
    });
  }
  function sortearAmigo() {
    if (amigos.length === 0) {
      alert('Não há amigos para sortear!');
      return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    const amigoSorteado = amigos[indiceAleatorio];
  
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
}