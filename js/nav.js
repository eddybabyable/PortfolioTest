const navToggle = document.querySelector('.index')
const offToggle = document.querySelector('.darken')
const homepage = document.getElementById('home-page-content')
const navID = document.getElementById('nav-id')
const contentShrink = document.getElementById('home-page-content')


navToggle.addEventListener('click', _ => {
    navID.classList.add('nav-is-open')
    // contentShrink.classList.add('content-shrink')

})
offToggle.addEventListener('click', _ => {
    navID.classList.remove('nav-is-open')
    // contentShrink.classList.remove('content-shrink')
})
