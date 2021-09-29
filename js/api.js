//Essa função checa o status do ToDo que recebemos via API
const checkStatus = (status) => {
    if(status) {
        return "completed";
    }else {
        return "not-completed";
    }
}
//Essa função cria um card especifico para a API, e ela é diferente da função que cria cards no app.js
const criarCard = (userId,id,title,completed) => {
    let card = 
    `
    <div class="todo">

        <li class="todo-item">${id}</li>
        <p class="todo-descricao ${checkStatus(completed)}">${title}</p>
        <span class="id-usuario">Id usuário: ${userId}</span>
        <button class="complete-btn">OK</button>
        <button class="delete-btn">X</button>
    </div>
    `
    return card;
}   
//função para, na inicialização da página, carregar todos os dados que recebemos da API
window.onload = () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/`, options)
        .then(response => {
            response.json()
            .then (dados => {
                for(let dado of dados) {
                    let card = criarCard(dado.userId,dado.id,dado.title,dado.completed);

                    let todoList = document.querySelector(".todo-list"); 
                    todoList.insertAdjacentHTML("beforeend",card); 
                }

            })
        })
}

const teste = () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/`, options)
        .then(response => {
            response.json()
            .then (dados => {
                dados
            })
        })
}
