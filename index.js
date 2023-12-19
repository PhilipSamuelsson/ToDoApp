submitButton = document.getElementById('submit-button')
textInput = document.getElementById('text-input')
list = document.getElementById('list')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const text = textInput.value
    list.innerHTML += `<div class="item-container"><input type="checkbox" class="checkbox"><p>${text}</p><button class="delete-button">Delete</button>
    </div></li>`
    textInput.value = ''
    console.log(text)
})
