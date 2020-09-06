const enquiry = document.querySelector('.enquiry')
const form = document.querySelector('.contact-form')
const email = document.getElementById('email')

window.addEventListener('load', (event) => {
  console.log('The page has fully loaded')
  $('#navbar-placeholder').load('../assets/nav.html')
})

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

// Event listeners
form.addEventListener('submit', function (e) {
  // e.preventDefault()

  const form = (document.getElementById('enquiry').className =
    'contact-form sent')

  console.log('submit clicked')
})
