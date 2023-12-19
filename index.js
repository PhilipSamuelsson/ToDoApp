submitButton = document.getElementById('submit-button')
textInput = document.getElementById('text-input')
list = document.getElementById('list')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const text = textInput.value
    list.innerHTML += `<li>${text}</li>`
    textInput.value = ''
    console.log(text)
})
