const photoContainer = document.querySelector("photo");
const bigShow = document.getElementById(`bigShow`);
const left = document.getElementById("leftBtn");

let currentIndex = 0;
let isShown = true;

const image = [
    {
        src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Group",
    },
    {
        src: "https://images.unsplash.com/photo-1633469924738-52101af51d87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnb3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Hill",
    },
    {
        src: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Band",
    },
    {
        src: "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Superbat",
    },
    {
        src: "https://images.unsplash.com/photo-1505322033502-1f4385692e6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlZ298ZW58MHx8MHx8fDA%3D",
        alt: "Vilage",
    },
];

function createPics(){
    images.forEach((image) => {
        const imageElem = document.createElement(`img`)
        imageElem.src = image.src
        imageElem.alt = image.alt
        imageElem.className = "pictures";
        imageElement.addEventListener(`click`)
        })
    }
