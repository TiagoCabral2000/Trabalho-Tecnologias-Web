// BLUENAV -> BLUENAV FIXA *****************************************************************************************
var blueNav = document.querySelector('.blue-nav');
var whiteNav = document.querySelector('.white-nav');  

function checkScroll() {
    var scrollPosition = window.scrollY; // Verifica a posição vertical do site em que o utilizador está

    var whiteNavHeight = whiteNav.offsetHeight; //retorna a altura da whitenav, incluindo altura, margens e bordas (exclui padding)

    if (scrollPosition >= whiteNavHeight) { // Verifica se a posição de rolagem ultrapassou a altura da .white-nav
        blueNav.classList.add('blue-nav-fixa'); // Adiciona a classe .blue-nav-fixa quando descer além da .white-nav
    }
    else {
        blueNav.classList.remove('blue-nav-fixa'); // Remove a classe .blue-nav-fixa quando voltar acima da .white-nav
    }
}

window.addEventListener('scroll', checkScroll); // Invoca a função sempre que o scroll muda