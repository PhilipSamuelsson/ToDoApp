const submitButton = document.getElementById('submit-button')
const textInput = document.getElementById('text-input')
const list = document.getElementById('list')
let deleteButtons = document.querySelectorAll('.delete-button')
let checkboxes = document.querySelectorAll('.checkbox')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const text = textInput.value
    list.innerHTML += `<div class="item-container">
    <input type="checkbox" class="checkbox">
    <p>${text}</p>
    <button class="delete-button">Delete</button>
    </div>`
    textInput.value = ''
    console.log(text)

    deleteButtons = document.querySelectorAll('.delete-button')
    checkboxes = document.querySelectorAll('.checkbox')

    deleteButtons.forEach((button) => {
        button.addEventListener('click', handleDelete)
    })

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', handleCheck)
    })
})

function handleCheck(event) {
    event.target.parentNode.classList.toggle('checked')
    textInput.classList.toggle('checked')
}

function handleDelete(event) {
    event.target.parentNode.remove()
}
