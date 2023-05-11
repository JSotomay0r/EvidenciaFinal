const personButton = document.querySelector('#btn-person')
const loginButton = document.querySelector('#btn-login')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('#btn-close')

function toggleModal(e, force) {
    modal.classList.toggle('show', force)
}

;[personButton, loginButton, closeButton].forEach(btn => btn.addEventListener('click', toggleModal))
