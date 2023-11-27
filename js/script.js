const images = [
    "img/img_blog1.webp",
    "img/img_blog3.jpeg",
    "img/img_blog4.webp",
    "img/img_blog5.jpeg",
    "img/img_blog6.jpeg"
]


const img_slide = document.querySelector(".slide_containte .img_slide")
const w = window.innerWidth

const recup_images = () => {
    for (let i = 0; i < images.length; i++) {
            
        const img = document.createElement("img")
        img.src = images[i]
        img_slide.appendChild(img)


            setInterval(() => {
                img_slide.scrollBy(480.5, 0)
        
            }, 2000)
    
    }
}

// if (window.matchMedia("(orientation: landscape)").matches) {
//     setInterval(() => {
//         img_slide.scrollBy(1000, 0)

//     }, 2000)
// }

window.onload = function () {
    recup_images()

}

