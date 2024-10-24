// Toogle class
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menuu di klikk
document.querySelector('#hamburger-menu').onclick =()=>{
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan Nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});