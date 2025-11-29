const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCamisetas = document.querySelector('#lista-camisetas');
let itemsCarrito = [];

capturarListeners();

function capturarListeners() {
    // btn agregar al carrito
    listaCamisetas.addEventListener('click', agregarCamiseta);
}

// funciones
function agregarCamiseta(e) {
    if (e.target.classList.contains('botonCard')) {
        const camisetaSelect = e.target.parentElement.parentElement;
        leerDatosCamiseta(camisetaSelect);
    }
}

// leer contenido de la card
function leerDatosCamiseta(camiseta) {
    console.log(camiseta);

    const infoCamiseta = {
        img: camiseta.querySelector('img').src,
        titulo: camiseta.querySelector('h5').textContent,
        precio: camiseta.querySelector('p').textContent,
        id: camiseta.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    itemsCarrito = [...itemsCarrito, infoCamiseta];

    console.log(itemsCarrito);

    carritoHtml();
}


// mostrar carrito con elementos
function carritoHtml() {
    limpiarCarrito();

    itemsCarrito.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${item.titulo}
            </td>
        `;
        contenedorCarrito.appendChild(row);
    })
}

function limpiarCarrito() {
    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}