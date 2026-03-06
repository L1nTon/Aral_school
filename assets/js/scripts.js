const burgerMenu = document.getElementById('mobile-menu-btn')
burgerMenu.addEventListener('click', function(){
    document.querySelector('header').classList.toggle('active')
    document.querySelector('.mobile-nav').classList.toggle('active')
    burgerMenu.classList.toggle('active')
})

const programmeCards = document.querySelectorAll('.programme-grid article')
programmeCards.forEach(e => {
    e.querySelector('.title')?.addEventListener('click', function(){e.classList.toggle('active')})
})