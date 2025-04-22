document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('confirm-password')
  const passwordError = document.getElementById('password-error')
  form.addEventListener('submit', function (event) {
    if (password.value !== confirmPassword.value) {
      event.preventDefault()
      passwordError.textContent = 'Passwords do not match'
      passwordError.style.color = 'red'
    } else {
      passwordError.textContent = ''
      alert('Successful registration')
    }
  })
  password.addEventListener('input', validatePasswords)
  confirmPassword.addEventListener('input', validatePasswords)
  function validatePasswords() {
    if (password.value !== confirmPassword.value) {
      passwordError.textContent = 'Passwords do not match'
      passwordError.style.color = 'red'
    } else {
      passwordError.textContent = ''
    }
  }
})
