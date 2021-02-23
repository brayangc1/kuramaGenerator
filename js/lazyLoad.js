import { imgCreadas, consoleImages } from "./main.js";

const isIntersecting = entry => entry.isIntersecting;
export let imgCargadas = 0;

const tarea = (entry) =>{    
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src= url;

    imgCargadas++;
    consoleImages(imgCreadas,imgCargadas);
    observer.unobserve(container);

    imagen.onload = () =>{
        container.parentElement.replaceChild(imagen,container);
        imagen.classList.add('margin');
    }
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(tarea);
})

export const lazyLoading = (figure) =>{
    observer.observe(figure);
}