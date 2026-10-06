document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const buttons = document.querySelectorAll('.btn-add');
    let count = 0;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartCount.innerText = count;

            // Efecto GO: Animación de éxito
            btn.innerText = "¡AÑADIDO!";
            btn.style.backgroundColor = "#10b981";
            btn.style.boxShadow = "0 0 20px #10b981";
            
            setTimeout(() => {
                btn.innerText = "Añadir al carrito";
                btn.style.backgroundColor = "";
                btn.style.boxShadow = "";
            }, 1000);
        });
    });
});