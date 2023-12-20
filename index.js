// Declaring variables for elements in the HTML file
const submitButton = document.getElementById('submit-button')
const textInput = document.getElementById('text-input')
const list = document.getElementById('list')
const category = document.getElementById('category')
const dateInput = document.getElementById('date-input')

// Adding eventlistener for the text input, date input, and submit button
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const text = textInput.value
    const dueDate = moment(dateInput.value)
    const currentDate = moment()

    // Creating div for the tasklist
    const itemContainer = document.createElement('div')
    itemContainer.className = 'item-container mx-auto'

    // Creating checkbox, category, paragraph, due date, and delete button for the tasklist(div)
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'
    checkbox.addEventListener('click', handleCheck)

    const categoryText = document.createElement('p')
    categoryText.textContent = category.value
    categoryText.className = 'category-text'

    const paragraph = document.createElement('p')
    paragraph.className = 'paragraph'
    paragraph.textContent = text

    // Declaring variables for the due date and delete button
    const dueDateText = document.createElement('p')
    const daysLeft = dueDate.diff(currentDate, 'days')
    const weeksLeft = dueDate.diff(currentDate, 'weeks')
    dueDateText.textContent = `Due in ${daysLeft} days (${weeksLeft} weeks)`
    dueDateText.className = 'due-date-text'
    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', handleDelete)

    itemContainer.appendChild(checkbox)
    itemContainer.appendChild(categoryText)
    itemContainer.appendChild(paragraph)
    itemContainer.appendChild(dueDateText)
    itemContainer.appendChild(deleteButton)
    list.appendChild(itemContainer)

    textInput.value = ''
    dateInput.value = ''
})

function handleCheck(event) {
    const checkbox = event.target
    const itemContainer = checkbox.parentNode

    // Toggle the 'checked' class on the itemContainer
    itemContainer.classList.toggle('checked')
    textInput.classList.toggle('checked')

    // Find the dueDateText element within the itemContainer
    const dueDateText = itemContainer.querySelector('.due-date-text')

    // If the checkbox is checked, set the text to 'Done', otherwise reset it
    dueDateText.textContent = checkbox.checked
        ? 'Done'
        : getDueDateText(itemContainer)
}

function getDueDateText(itemContainer) {
    // Function to get the due date text based on the current date
    const dueDateText = itemContainer.querySelector('.due-date-text')
    const currentDate = moment()
    const dueDate = moment(dueDateText.getAttribute('data-due-date'))

    const daysLeft = dueDate.diff(currentDate, 'days')
    const weeksLeft = dueDate.diff(currentDate, 'weeks')
    return `Due in ${daysLeft} days (${weeksLeft} weeks)`
}

function handleDelete(event) {
    const deleteButton = event.target
    deleteButton.parentNode.remove()
}
