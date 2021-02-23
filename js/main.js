import { lazyLoading, imgCargadas } from "./lazyLoad.js";

const section = document.getElementById('seccion');
const boton = document.querySelector('#agregar');
const removeButton = document.getElementById('quitar');
const max = 122;
const min = 1;
export let imgCreadas = 0;

export const consoleImages = (creadas,cargadas) => {
    console.log(`🦊 Total imagenes: ${creadas}`)
    console.log(`👀 Imagenes cargadas: ${cargadas}`)
}

const random = () => Math.floor(Math.random() * (max - min)) + min;

const crearImagen = () =>{
    const figure = document.createElement('figure');
    const imagen = document.createElement('img');
    // imagen.src = `https://randomfox.ca/images/${random()}.jpg`;
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    imgCreadas++;

    figure.appendChild(imagen);
    return figure;
}

const borrarFigure = () =>{
    const selectDelete = document.querySelectorAll('figure');
    
    const arrayDelete = [...selectDelete];
    return arrayDelete;
} 

const borrarImagen = () =>{
    const selectDelete = document.querySelectorAll('img');
    
    const arrayDelete = [...selectDelete];
    return arrayDelete;
} 

const agregarImagen = () => {
    const newImage = crearImagen();
    section.appendChild(newImage);
    lazyLoading(newImage);

    consoleImages(imgCreadas,imgCargadas);
}

const quitarImagen = () =>{
    const deleteImage = borrarImagen();
    const deleteFigure = borrarFigure();

    deleteImage.forEach(hijo=> hijo.remove());
    deleteFigure.forEach(hijo => hijo.remove());    
}

boton.addEventListener('click', agregarImagen);

removeButton.addEventListener('click', quitarImagen);