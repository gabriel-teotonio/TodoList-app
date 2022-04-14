const list = document.getElementById('list');
const inputText = document.getElementById('input-text');
const btnAdd = document.getElementById('btn-add');

 

btnAdd.addEventListener('click', addItem);
list.addEventListener('click',deleteItemAndComplete);





// funçao para criar e adicionar elemento li
function addItem(evento){
    evento.preventDefault()

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-list')
    todoLi.innerText = inputText.value;
    todoDiv.appendChild(todoLi);

    saveLocalTodos(inputText.value); //pega o valor do input
 
    const btnComplete = document.createElement('button');
    btnComplete.innerHTML = '<img src="imagens/checked.ico" alt="">';
    btnComplete.classList.add('btnComplete');
    todoDiv.appendChild(btnComplete);

    const btnRemove = document.createElement('button');
    btnRemove.innerHTML = '<img src="imagens/caixa.png" alt=""></img>';
    btnRemove.classList.add('btnRemove');
    todoDiv.appendChild(btnRemove);

    list.appendChild(todoDiv);
   
    inputText.value = '';
}

//funçao de deletar cada elemento
function deleteItemAndComplete(e){
     let item = e.target

     if(item.classList[0] === 'btnRemove'){
        const tudo = item.parentElement
        tudo.classList.add('fail');

        removeLocalStorage(todo);

        tudo.addEventListener('transitionend', () => {
          tudo.remove()
         })
    }

    if(item.classList[0] === 'btnComplete'){
        const tudo = item.parentElement
        tudo.classList.toggle('active');
    }
}


//mudar imagem header ao carregar a página
const aside = document.querySelector('aside');
const btnAside = document.getElementById('btnAside');


window.onload = function showAll(){
    const boxImg = document.querySelector('.box-show');
    const boxTitulo = document.querySelector('.box-titulo');
    
    aside.classList.add('showAside')
    boxImg.classList.add('show')
    boxTitulo.classList.add('show');
}

//botao aside menu
btnAside.addEventListener('click',()=>{
    aside.classList.toggle('showMenu')
})




//salvar dados no localstorage do brownser (banco de dados)

function saveLocalTodos(todo){
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos)); 
}



document.addEventListener('DOMContentLoaded',getTodos); //ao carregar a pagina do dom, a função será ativada

// pegar dados do BD e mandar ao DOM




function getTodos() {
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }


    todos.forEach(function(todo){
         

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-list')
    todoLi.innerText = todo;
    todoDiv.appendChild(todoLi);


    
    const btnComplete = document.createElement('button');
    btnComplete.innerHTML = '<img src="imagens/checked.ico" alt="">';
    btnComplete.classList.add('btnComplete');
    todoDiv.appendChild(btnComplete);


    const btnRemove = document.createElement('button');
    btnRemove.innerHTML = '<img src="imagens/caixa.png" alt=""></img>';
    btnRemove.classList.add('btnRemove');
    todoDiv.appendChild(btnRemove);

    list.appendChild(todoDiv);
   
    inputText.value = '';
     }); 


}

//remover dados do localStorage
function removeLocalStorage(todo) {
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1)
    localStorage.setItem('todos', JSON.stringify(todos))
}




//dark mode

const inputDarkMode = document.querySelector('.inputMode');
const html = document.querySelector('html');

inputDarkMode.addEventListener('click', changeBg);

function changeBg(){
    html.classList.toggle('darkMode');
}
