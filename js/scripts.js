

function openSub() {
    var subMenu = document.getElementById('sub')

    if (subMenu.className === 'sub') {
        subMenu.className += ' sub-menu'
    }

    else {
        subMenu.className = 'sub'
    }
}


function openNav() {
    var menuMobile = document.getElementById('menu')
    var cont = document.getElementById('main')
    var foot = document.getElementById('footer')

    if (menuMobile.className === 'menu') {
        menuMobile.className += ' menu-mobile'

        cont.className += ' main-none'
        foot.className += ' footer-none'
    }

    else {
        menuMobile.className = 'menu'

        cont.className = 'main'
        foot.className = 'footer'
    }





}

