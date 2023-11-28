let img = document.querySelectorAll(".img_slide img")
let indice = 0



const slideAu = (valeur) => {
    valeur.classList.add("active")
} 

const slideDi = (valeur) => {
    valeur.classList.remove("active")
} 

window.onload = () => {
    
    slideAu(img[indice])
    imgSlide()
}


const imgSlide = () => {


        setInterval(() => {
            slideDi(img[indice])
            slideAu(img[indice+1])

            indice = indice + 1
            slideDi(img[5])

            if (indice === 5) {
                indice=0

                slideAu(img[0])
                slideDi(img[0])
                slideAu(img[0])

                indice = indice + 1
            }

        }, 2000);
        

    
}

