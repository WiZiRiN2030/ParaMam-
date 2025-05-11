document.addEventListener("DOMContentLoaded", function () {
    const btnAbrir = document.querySelector("#Abrir")
    const btnCerrar = document.querySelector("#Cerrar")

    // Abrir Carpeta
    btnAbrir.addEventListener("click", function () {
        const ElememtoSuperior = document.querySelector("#superior")
        ElememtoSuperior.classList.add("abrir-superior")

        const h1 = document.querySelector("h1")
        const p = document.querySelector("p")
        h1.style.transform = "translateY(-120px)"
        p.style.transform = "translateY(-120px)"
        h1.style.transition = "transform 0.65s ease-in-out"
        p.style.transition = "transform 0.65s ease-in-out"

        const IconoCorazon = document.querySelector(".bi")
        IconoCorazon.classList.add("bi-rotada")

        setTimeout(() => {
            ElememtoSuperior.style.zIndex = -1
            const ElmentoMensaje = document.querySelector("#mensaje")
            ElmentoMensaje.classList.add("abrir-mensaje")
        }, 700);

    })

    // Cerrar Carpeta
    btnCerrar.addEventListener("click", function () {
        const ElememtoSuperior = document.querySelector("#superior")

        const ElementoMensaje = document.querySelector("#mensaje")
        ElementoMensaje.classList.remove("abrir-mensaje")

        setTimeout(() => {
            const h1 = document.querySelector("h1")
            const p = document.querySelector("p")
            h1.style.transform = "translateY(0px)"
            p.style.transform = "translateY(0px)"

            const IconoCorazon = document.querySelector(".bi")
            IconoCorazon.classList.remove("bi-rotada")

            ElememtoSuperior.style.zIndex = 0
            ElememtoSuperior.classList.remove("abrir-superior")
        }, 700);
    })

    // Con Click Carta
    const contenedor = document.querySelector("#AbrirContenedor")
    contenedor.addEventListener("click", function () {
        const ElememtoSuperior = document.querySelector("#superior")
        ElememtoSuperior.classList.add("abrir-superior")

        const h1 = document.querySelector("h1")
        const p = document.querySelector("p")
        h1.style.transform = "translateY(-120px)"
        p.style.transform = "translateY(-120px)"
        h1.style.transition = "transform 0.65s ease-in-out"
        p.style.transition = "transform 0.65s ease-in-out"

        const IconoCorazon = document.querySelector(".bi")
        IconoCorazon.classList.add("bi-rotada")

        setTimeout(() => {
            ElememtoSuperior.style.zIndex = -1
            const ElmentoMensaje = document.querySelector("#mensaje")
            ElmentoMensaje.classList.add("abrir-mensaje")
        }, 700);
    })
})