let img = document.querySelectorAll(".img_slide img")
const btns = document.querySelectorAll(".ensembe_btn input")

let indice = 1



const slideAu = (valeur) => {
    valeur.classList.add("active")

} 

const slideDi = (valeur) => {
    valeur.classList.remove("active")


} 

window.onload = () => {
    
    slideAu(img[indice])

    // btn prev
    btns[0].addEventListener("click", imgSlidePrev)

    btns[0].addEventListener("mouseover", imgSlideStop)
    btns[0].addEventListener("mouseout", imgSlideStart)

    // btn next
    btns[1].addEventListener("click", imgSlide)

    btns[1].addEventListener("mouseover", imgSlideStop)
    btns[1].addEventListener("mouseout", imgSlideStart)
        
    
}

const imgSlidePrev = () => {


    slideDi(img[indice])
    slideAu(img[indice-1])

    indice = indice - 1

            
    if (indice === 0 ) {
        indice = 6
        slideDi(img[indice-1])
        slideAu(img[indice-1])

        indice = indice -1
        
    }

}

const imgSlide = () => {


    slideDi(img[indice])
    slideAu(img[indice+1])

    indice = indice + 1

            
    if (indice === 6 ) {
        indice = 1
        slideDi(img[indice])
        slideAu(img[indice])

        indice = indice 
        
    }

}
let timers = setInterval(imgSlide, 2000);

const imgSlideStop = () => {
    clearInterval(timers)
}

const imgSlideStart = () => {
     timers = setInterval(imgSlide, 2000);


}



