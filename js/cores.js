const botoes = document.querySelectorAll("[data-cor]");
const robos = document.querySelectorAll("[tipo]");

botoes.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        for (let i = 0; i < robos.length; i++) {
            if (evento.target.dataset.cor !== robos[i].dataset.cor) {
                robos[i].hidden = true;
            }
            if (evento.target.dataset.cor === robos[i].dataset.cor) {
                robos[i].hidden = false;
            }
        }
    })
})
