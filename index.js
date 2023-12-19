const submitButton = document.getElementById('submit-button')
const textInput = document.getElementById('text-input')
const list = document.getElementById('list')
const openModal = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const closeModal = document.getElementsByClassName('close')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const text = textInput.value

    const itemContainer = document.createElement('div')
    itemContainer.className = 'item-container mx-auto'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'
    checkbox.addEventListener('click', handleCheck)

    const paragraph = document.createElement('p')
    paragraph.textContent = text

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', handleDelete)

    itemContainer.appendChild(checkbox)
    itemContainer.appendChild(paragraph)
    itemContainer.appendChild(deleteButton)

    list.appendChild(itemContainer)

    textInput.value = ''
    console.log(text)
})

function handleCheck(event) {
    const checkbox = event.target
    checkbox.parentNode.classList.toggle('checked')
    textInput.classList.toggle('checked')
}

function handleDelete(event) {
    const deleteButton = event.target
    deleteButton.parentNode.remove()
}

openModal.addEventListener('click', () => {
    modal.style.display = 'block'
    openModal.style.display = 'none'
})

closeModal[0].addEventListener('click', () => {
    modal.style.display = 'none'
    openModal.style.display = 'block'
})
