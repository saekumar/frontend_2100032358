document.addEventListener('DOMContentLoaded', () => {
  const addFieldBtn = document.getElementById('add-field-btn')
  const fieldTypeSelect = document.getElementById('field-type')
  const form = document.getElementById('dynamic-form')

  // Function to create a new form field
  const createField = (type) => {
    const fieldWrapper = document.createElement('div')
    fieldWrapper.className = 'form-field'

    let field

    switch (type) {
      case 'text':
        field = document.createElement('input')
        field.type = 'text'
        field.placeholder = 'Enter text'
        break
      case 'checkbox':
        field = document.createElement('input')
        field.type = 'checkbox'
        break
      case 'radio':
        field = document.createElement('input')
        field.type = 'radio'
        field.name = 'radio-group'
        break
      default:
        return
    }

    // Add remove button
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.className = 'remove-btn'
    removeBtn.type = 'button'
    removeBtn.addEventListener('click', () => {
      form.removeChild(fieldWrapper)
    })

    fieldWrapper.appendChild(field)
    fieldWrapper.appendChild(removeBtn)
    form.appendChild(fieldWrapper)
  }

  // Event listener for the add field button
  addFieldBtn.addEventListener('click', () => {
    const selectedType = fieldTypeSelect.value
    createField(selectedType)
  })
})
