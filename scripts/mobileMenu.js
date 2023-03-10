const btnMenu = document.getElementById('menu'),
    btnClose = document.getElementById('close'),
    navbar = document.getElementById('links'),
    body = document.getElementById('body')


function navbarMobile(event) {
    if(event === 'open') {
        btnMenu.classList.remove('active');
        btnClose.classList.add('active');

        navbar.classList.add('active')
        body.classList.add('overflow')

    } else if (event === 'close'){
        btnMenu.classList.add('active')
        btnClose.classList.remove('active')

        navbar.classList.remove('active')
        body.classList.remove('overflow')
    }
}