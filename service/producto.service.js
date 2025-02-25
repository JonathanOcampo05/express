const ProductoRepository = require('../repositories/producto.repository');

class ProductoService {
    async getAllProductos() {
        return await ProductoRepository.getAllProductos();
    }

    async createProducto(producto) {
        return await ProductoRepository.createProducto(producto);
    }

    async getProductoById(id) {
        return await ProductoRepository.getProductoById(id);
    }

    async getProductoByNumSerie(numSerie) {
        return await ProductoRepository.getProductosByNumSerie(numSerie);
    }
}

module.exports = new ProductoService();
