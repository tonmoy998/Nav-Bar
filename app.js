const toggleBtn = document.querySelector('.toggle')

const navLinks = document.querySelector('.nav-links')

toggleBtn.addEventListener('click', function(){
    navLinks.classList.toggle('show-links')
    console.log(navLinks.clientHeight);
})