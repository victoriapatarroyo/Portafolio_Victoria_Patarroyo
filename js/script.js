function agregarCarrito(camiseta) {
    const producto = document.getElementById(camiseta);
    const nombreProducto = producto.querySelector('h5').textContent;
    const precioProducto = producto.querySelector('p').textContent;

    let arregloProductos = localStorage.getItem('arregloProductos');
    arregloProductos = arregloProductos ? JSON.parse(arregloProductos) : [];

    arregloProductos.push({
        nombreProducto: nombreProducto,
        precioProducto: precioProducto
    });

    localStorage.setItem('arregloProductos', JSON.stringify(arregloProductos));    
}