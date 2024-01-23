var Duvida = document.querySelectorAll('.duvida')

Duvida.forEach(function (duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    } )
} )

