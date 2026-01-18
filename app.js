const picturesContainer = document.querySelector(`.pictures`)
const bigShow = document.getElementById(`bigShow`)

function createPictures(){
    images.forEach(function(image){
        const imageElement = document.createElement(`img`)
        imageElement.src = image.src
        imageElement.alt = image.alt
        
        picturesContainer.append(imageElement)

        imageElement.addEventListener(`click`)
        }
    }
}