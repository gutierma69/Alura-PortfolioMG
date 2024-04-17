import { redes } from "./data.js"
import { renderImage } from "./render_image.js";

export const  handler_sobreMi = (body, imagenPrincipal) => {
    
    body.className = "";
    void body.offsetWidth; 
    body.className = "background-about";
    informacion.textContent = "";
    imagenPrincipal.textContent = "";
    //Etiquetas
    let title = document.createElement('span');
    let spanTitle = document.createElement('span')
    let spanTitle2 = document.createElement('span')
    let description = document.createElement('span');
    let navLinks = document.createElement('ul');


    const imagen = "./asset/about_me.png";
    renderImage(imagen, imagenPrincipal);

    //Asignaciones
    informacion.append(title, spanTitle, spanTitle2, description, navLinks);
    //Clases
    navLinks.classList.add('link_redes');
    title.classList.add('span_1');
    spanTitle2.classList.add('span_2');
    description.classList.add('description');

    //Contenido
    title.textContent = "Hola, mi nombre es";
    spanTitle.textContent = "Maria Gutierrez y soy"
    spanTitle2.textContent = "Ingeniero Agrónomo formándome en DataSience, AnalísisGIS y Desarrollo Web FrontEnd"
    description.textContent = "Soy una profesional del sector agrícola e industrial apasionada por la educación en línea y la tecnologia Agrícola. Tengo experiencia en la gestión de proyectos relacionados con el abastecimiento, la producción y la calidad de frutas y otros rubros."

    //for redes
   const redes_array = redes;
    redes_array.forEach(el => {
        //Etiquetas
        let li = document.createElement('li');
        let link = document.createElement('a');
        //Asignaciones
        navLinks.appendChild(li);
        li.appendChild(link);
        //Contenido/atributos
        link.setAttribute('href', el.link);
        link.setAttribute('target', '_blank');

        link.textContent = el.nombre
        link.classList.add('redes')
    })
}