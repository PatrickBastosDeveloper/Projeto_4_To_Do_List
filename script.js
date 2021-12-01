const bottonClicked = document.querySelector('#criar-tarefa');

// Desenvolvimento com apoio do Leonardo Mendonça XP Tribo B
// Função para criar o input e seu valor, li dinâmicamente, a classe e introdução ao HTML. 
function onClicked() {
  const newText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  const newItem = document.createElement('li');
  newItem.innerText = newText;
  newItem.className = 'item-lista';
  const listaTarefas = document.querySelector('#lista-tarefas');
  newItem.addEventListener('click', selectItem);
  newItem.addEventListener('dblclick', lineThrough);
  listaTarefas.appendChild(newItem);
}
bottonClicked.addEventListener('click', onClicked);

// Desenvolvimento com apoio do Leonardo Mendonça XP Tribo B
// Função para selecionar apenas uma tarefa com cor cinza na lista.
function selectItem(event) {
  const clicked = event.target;
  if (!Object.values(clicked.classList).includes('selected')) {
  const selected = document.querySelector('.selected');
  if (selected != null) {
    selected.classList.remove('selected');
  }
  clicked.classList.add('selected');
  }
}
// Função para riscar uma tarefa. 
// Ref refatoração e correção da função que risca a tarefa com o aluno Victor Hugo XP Tribo B
// Método includes sugerido pelo Victor para refatorar a condicional.
// Este método permite conferir se uma string contém um determinado conjunto de caracteres.
// ref from https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function lineThrough(event) {
  if (event.target.className.includes('completed')) {
    event.target.classList = 'item-lista selected';
} else {
  event.target.classList.add('completed');
  }
}

// Solção com Auxílio do Leonardo Vogel XP Tribo A
//Função que permite apagar uma ou mais tarefas da lista.
function clean() {
  let clearList = document.querySelector('#lista-tarefas');
  clearList.innerHTML = '';
}
document.getElementById('apaga-tudo').addEventListener('click', clean);

// Correção do uso do querySelectorByClassName por querySelectorAll pelo Leonardo Mendonça XP B.
//Função par remover itens realizados. 
function removeItemList() {
  const completed = document.querySelectorAll('.completed');
  for(let index = 0; index < completed.length;index += 1){
    completed[index].remove();
  }
}
document.getElementById('remover-finalizados').addEventListener('click', removeItemList);
