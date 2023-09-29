package pe.edu.cibertec.CL1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.CL1.model.Product;
import pe.edu.cibertec.CL1.repository.ProductRepository;

import java.util.List;
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    //Metodo Listar
    public List<Product> listarProductos(){
        return productRepository.findAll();
    }
    //Metodo Registrar
    public void registrarProductos(Product product){
        productRepository.save(product);
    }
    //Metodo Eliminar
    public void eliminarProducto(Long id_product){
        productRepository.deleteById(id_product);
    }
}
