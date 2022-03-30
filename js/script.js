const addBtn = document.querySelector('.add-btn')
const addInput = document.querySelector('.add-input')
const todoList = document.querySelector('.todo-list')


let allTodo = JSON.parse(localStorage.getItem('todos')) || []



addInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        newItem()
    }
})

const newItem = () => {
    if (addInput.value.trim() === '') {
        alert('write something')
        addInput.value = ''
        return
    }
    allTodo = [...allTodo, addInput.value]
    localStorage.setItem('todos', JSON.stringify(allTodo))
    addInput.value = ''
    drawList(allTodo)

}
addBtn.addEventListener('click', () => {
   newItem()
})

const drawItem = (text) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    let input = document.createElement('input')
    input.classList.add('form-input-check', 'add-input')
    input.type = 'checkbox'
    const span = document.createElement('span')
    span.textContent = text
    console.log(span)
    const button = document.createElement('button')
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
    button.textContent = 'Delete'
    li.append(input)
    li.append(span)
    li.append(button)
    todoList.append(li)

}

const deleteBtn = () => {
    const deleteButtons = document.querySelectorAll('.delete-btn')
    deleteButtons.forEach((item, idx) => {
        item.addEventListener('click', () => {
            item.parentElement.remove()
            allTodo = allTodo.filter((TFS, idxTFS) => idx !== idxTFS)
            localStorage.setItem('todos', JSON.stringify(allTodo))
            drawList(allTodo)
        })
    })
}

const drawList = (array) => {
    todoList.innerHTML = ''
    array.forEach((todo) => {
        drawItem(todo)
    })
    deleteBtn()
}

drawList(allTodo)

// const allTodos = [{age: 10, name : 'Roma'}, { age: 20, name: 'Igor'}]
// console.log(allTodos[1])
//
//
// const user = {
//     user: 'userbek',
//     age: 10
// }
// user.job = 'developer'
// user["phone"] = '089098'
// delete user.age
// alert(user.user)
// alert(user['user'])










