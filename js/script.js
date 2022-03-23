const addBtn = document.querySelector('.add-btn')
const addInput = document.querySelector('.add-input')
const todoList = document.querySelector('.todo-list')


addBtn.addEventListener('click', () =>{
if (addInput.value.length === 0){
    alert('Введите название задачи!')
    return
}
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    const span = document.createElement('span')
    span.textContent = addInput.value
    const button = document.createElement('button')
    button.classList.add('btn',  'btn-danger', 'btn-sm', 'delete-btn')
    button.textContent = 'Delete'
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
    addInput.value = ''
    const deleteBtn = document.querySelectorAll('.delete-btn')
    const listGroupItems = document.querySelectorAll('.list-group-item')
    deleteBtn.forEach((item, idx) =>{
        item.addEventListener('click', () =>{
            listGroupItems[idx].remove()
        })
    })
    console.log(deleteBtn)
})

