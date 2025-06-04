const button = document.getElementById('getTodos');
const todoList = document.getElementById('todoList');

    button.addEventListener('click', async () => {
      try {
        const response = await fetch('http://localhost:3000/tarefas'); // ajuste a porta e endpoint conforme sua API
        const todos = await response.json();

        console.log(todos)
        // limpa a lista antes de exibir novamente
        todoList.innerHTML = '';

        todos.forEach(todo => {
          const li = document.createElement('li');
          li.textContent = todo.title; // ou outro campo conforme o retorno da sua API
          todoList.appendChild(li);
        });
      } catch (error) {
        console.error('Erro ao buscar os todos:', error);
        alert('Erro ao buscar os todos. Veja o console para mais detalhes.');
      }
    });