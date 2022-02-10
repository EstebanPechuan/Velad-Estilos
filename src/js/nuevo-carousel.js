const slides = document.querySelectorAll('.carousel-slide')

// Creación de indicadores
// const indicadoresArr = document.querySelector('.carousel-indicadores')

// function createIndicador() {
//     let indicador = document.createElement('div')
//     indicador.setAttribute('class', 'indicador-slider')

//     indicadoresArr.appendChild(indicador)
// }

// for (let i = 0; i < slides.length; i++) {
//     createIndicador()   
// }

// const indicadores = document.querySelectorAll('.indicador-slider')

// indicadores[0].classList.add('indicador-active')

const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')

let contador = 0
let j = 0
let i = 0


leftArrow.addEventListener('click', () => {
    j = contador
    
    slides[contador].classList.add('slide-right-out')

    contador--

    verificacionContador()
    removeAddClass()

    slides[contador].classList.add('slide-left-active')

    setTimeout( () => {
        slides[j].classList.remove('slide-right-out')
    }, 900)

    // indicadores[contador].classList.add('indicador-active')


    let blackBGarr = document.querySelectorAll('.black-bg')
    blackBGarr.forEach(black => {
        black.classList.remove('black-bg-anim')
    });
    
    let blackBG = document.querySelector('.slide-left-active .black-bg')
    blackBG.classList.add('black-bg-anim')

})

rightArrow.addEventListener('click', rightFunction)


function rightFunction() {
    i = contador

    slides[contador].classList.add('slide-left-out')

    contador++
    
    verificacionContador()
    removeAddClass()
    
    slides[contador].classList.add('slide-right-active')

    
    setTimeout( () => {
        slides[i].classList.remove('slide-left-out')
    }, 900)

    // indicadores[contador].classList.add('indicador-active')




    let blackBGarr = document.querySelectorAll('.black-bg')
    blackBGarr.forEach(black => {
        black.classList.remove('black-bg-anim')
    });
    
    let blackBG = document.querySelector('.slide-right-active .black-bg')
    blackBG.classList.add('black-bg-anim')
}

function verificacionContador() {
    if (contador < 0) {
        contador = slides.length-1
        return contador
    }

    if (contador >= slides.length) {
        contador = 0
    }
}

function removeAddClass() {
    slides.forEach(slide2 => {
        slide2.classList.remove('slide-active')
    });

    // indicadores.forEach(indi2 => {
    //     indi2.classList.remove('indicador-active')
    // });

    slides.forEach(a => {
        a.classList.remove('slide-left-active')
        a.classList.remove('slide-right-active')
    });
}


// let intervalCarousel = setInterval(rightFunction, 5000);