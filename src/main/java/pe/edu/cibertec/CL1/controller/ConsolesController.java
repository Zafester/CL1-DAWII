package pe.edu.cibertec.CL1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.CL1.model.Consoles;
import pe.edu.cibertec.CL1.model.Product;
import pe.edu.cibertec.CL1.model.ProductCategory;
import pe.edu.cibertec.CL1.request.ConsoleRequest;
import pe.edu.cibertec.CL1.response.ResultadoResponse;
import pe.edu.cibertec.CL1.service.ConsolesService;

import java.util.List;

@Controller
@RequestMapping("/console")
public class ConsolesController {

    @Autowired
    private ConsolesService consolesService;

    @GetMapping("/frmConsole")
    public String frmConsole(Model model) {
        model.addAttribute("lstConsolas", consolesService.listarConsolas());
        return "console/frmConsole";
    }

    // Metodo Registrar Producto
    @PostMapping("/registrarConsoles")
    @ResponseBody
    public ResultadoResponse registrarConsoles(@RequestBody ConsoleRequest consoleRequest) {
        String mensaje = "Consola registrada correctamente";
        Boolean respuesta = true;
        try {
            Consoles objConsoles = new Consoles();
            if (consoleRequest.getId_console()> 0) {
                objConsoles.setId_console(consoleRequest.getId_console());
            }
            objConsoles.setId_console(consoleRequest.getId_console());
            objConsoles.setName_console(consoleRequest.getName_console());
            objConsoles.setDescription(consoleRequest.getDescription());
            objConsoles.setModel(consoleRequest.getModel());
            objConsoles.setYear(consoleRequest.getYear());


            Product objProduct = new Product();
            objProduct.setId_product(consoleRequest.getId_product());

            ProductCategory objProductCategory = new ProductCategory();
            objProductCategory.setId(consoleRequest.getId());

            objConsoles.setProduct(objProduct);
            objConsoles.setCategory(objProductCategory);

            consolesService.registrarConsola(objConsoles);

        } catch (Exception e) {
            mensaje = "No se pudo registrar la consola";
            respuesta = false;
        }
        return ResultadoResponse.builder().mensaje(mensaje).respuesta(respuesta).build();





    }

    // No funciona xd
    @GetMapping("/listarConsolas")
    @ResponseBody
    public List<Consoles> listarConsolas() {
        return consolesService.listarConsolas();
    }
}
