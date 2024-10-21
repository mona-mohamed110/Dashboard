const sidebar = document.querySelector('aside');
const menubtn = document.querySelector('#menu_bar');
const closebtn = document.querySelector('#btn-close');

const themetoggler = document.querySelector('.theme-toggler')

menubtn.addEventListener('click' ,function(){
    sidebar.style.display = "block";
})
closebtn.addEventListener('click', function(){
    sidebar.style.display = "none";
})
themetoggler.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme-variables')

    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active')

})