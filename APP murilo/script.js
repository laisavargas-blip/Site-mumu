function mostrarHistoria() {

    const historia = document.getElementById("historia");

    if (historia.classList.contains("escondido")) {

        historia.classList.remove("escondido");

        document.querySelector("button").innerText =
            "Esconder história";

    } else {

        historia.classList.add("escondido");

        document.querySelector("button").innerText =
            "Conhecer a história";
    }
}