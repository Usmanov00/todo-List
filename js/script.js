const addBtn = document.querySelector('.add-btn')
const addInput = document.querySelector('.add-input')
const allMyBox = document.querySelector('.todo-list')


const getItem = (text) => {
    // if (addInput.value.length === 0) {
    //     alert('write something in a line')
    //     return
    // }
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    const span = document.createElement('span')
    span.textContent = text
    console.log(span)
    const button = document.createElement('button')
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
    button.textContent = 'Delete'
    li.append(span)
    li.append(button)
    allMyBox.append(li)

}

let allTodo = JSON.parse(localStorage.getItem('todo')) || []

allTodo.forEach((todo) =>{
    getItem(todo)
})

addBtn.addEventListener('click', () => {
    getItem(addInput.value)
    allTodo = [...allTodo, addInput.value]
    deleteItem()
    localStorage.setItem('todo', JSON.stringify(allTodo))
    addInput.value = ''
})



const deleteItem = () =>{
    const listGroupItems = document.querySelectorAll('.list-group-item')
    const deleteButtons = document.querySelectorAll('.delete-btn')
    deleteButtons.forEach((item, idx) =>{
        item.addEventListener('click', () =>{
            listGroupItems[idx].remove()
        })
    })
}


deleteItem()





