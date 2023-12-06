 const lista =["Um", "Dois", "Três"];

function getLista(){
    return lista;
}

export{getLista};

export function limpaLista(){
    lista.splice(0);
}

export function adicionaNaLista(novoItem){
    lista.push(novoItem);
}

export function removeDaLista(posicao) {
    lista.splice(posicao, 1);
  }