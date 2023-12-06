let img = document.querySelectorAll(".img_slide img")
const btns = document.querySelectorAll(".ensembe_btn input")

let indice = 1

let header_popop = document.querySelector(".popup")

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



            if (navigator.onLine) {
                header_popop.style = "transform: translateY(70%); transition: 1.5s; color: green;"
                // document.querySelector("i").classList.remove("bi bi-wifi-off")
                document.querySelector("i").classList.add("bi-wifi")
                document.querySelector(".popup span").innerHTML = "Connexion internet rétablie"

                setTimeout(() => {
                    header_popop.style = "transform: translateY(-100%); transition: 0.1S;"
                    document.querySelector("i").classList.remove("bi-wifi")
                }, 3000);
                
                }else {
                    document.querySelector("i").classList.add("bi-wifi-off")
                    header_popop.style = "transform: translateY(70%); transition: 1s;"
                    document.querySelector(".popup span").innerHTML = "Aucune connexion"
                    
                }
                
                


        
        window.addEventListener("online", () => {
            header_popop.style = "transform: translateY(70%);  color: green;"
            // document.querySelector("i").remove()
            document.querySelector("i").classList.add("bi-wifi")
            document.querySelector(".popup span").innerHTML = "Vous êtes maintenant connecter"
            setTimeout(() => {
                header_popop.style = "transform: translateY(-100%); transition: 0.1S;"
                document.querySelector("i").classList.remove("bi-wifi")
            }, 3000);
            
        })

        window.addEventListener("offline", () => {
            document.querySelector("i").classList.add("bi-wifi-off")
            header_popop.style = "transform: translateY(70%); transition: 1s; color: black;"
            document.querySelector(".popup span").innerHTML = "Vous êtes hors ligne"
        })
    
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



