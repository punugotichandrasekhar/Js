const todolist = [];
let todoListHTML = '';
function doit()
          {
            const value = document.querySelector('input').value;
            todolist.push(value);
            let todoListHTML = '';
            for( let i = 0;i<todolist.length;i++){
              todoListHTML +=`<p>${todolist[i]}<button onclick="todoList.splice(${i},1)">Delete</button></p>`;
            }
            document.querySelector('.js-todo-list').innerHTML = todoListHTML;
            document.querySelector('input').value = '';

          }