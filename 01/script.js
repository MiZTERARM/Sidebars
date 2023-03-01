const bodyEl = document.body
const hamburgerEl = document.querySelector('.hamburger')

hamburgerEl.addEventListener('click', () => {
	bodyEl.classList.toggle('active')
})
