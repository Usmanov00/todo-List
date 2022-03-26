const addBtn = document.querySelector('.add-btn')
const addInput = document.querySelector('.add-input')
const allMyBox = document.querySelector('.todo-list')


const getItem = () => {
    if (addInput.value.length === 0) {
        alert('write something in a line')
        return
    }
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    const span = document.createElement('span')
    span.textContent = addInput.value
    console.log(span)
    const button = document.createElement('button')
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
    button.textContent = 'Delete'
    li.append(span)
    li.append(button)
    allMyBox.append(li)
    addInput.value = ''

}

addBtn.addEventListener('click', () => {
    getItem()
})



const deleteItem = () =>{
    const listItemG = document.querySelectorAll('.list-group-item')
    const deleteButton = document.querySelectorAll('.delete-btn')
    deleteButton.forEach((item, idx) =>{
        item.addEventListener('lick', () =>{
            listItemG[idx].remove()
        })
    })
    console.log()
}

deleteItem()



