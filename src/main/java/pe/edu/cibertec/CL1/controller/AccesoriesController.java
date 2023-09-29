package pe.edu.cibertec.CL1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.CL1.model.Accesories;
import pe.edu.cibertec.CL1.model.Companies;
import pe.edu.cibertec.CL1.model.Product;
import pe.edu.cibertec.CL1.model.ProductCategory;
import pe.edu.cibertec.CL1.request.AccesoriesRequest;
import pe.edu.cibertec.CL1.response.ResultadoResponse;
import pe.edu.cibertec.CL1.service.AccesoriesService;

@Controller
@RequestMapping("/accesories")
public class AccesoriesController {

    @Autowired
    private AccesoriesService accesoriesService;

    @GetMapping("/frmAccesories")
    public String frmAccesories(Model model){
        model.addAttribute("lstAccesorios", accesoriesService.listarAccesorios());
        return "accesories/frmAccesories";
    }

    @GetMapping("/frmAccesoriesFiltro")
    public String frmAccesoriesFiltro(Model model){
        model.addAttribute("lstAccesorios", accesoriesService.listarAccesorios());
        return "accesories/frmAccesoriesFiltro";
    }

    @GetMapping("/frmAccesoriesReporte")
    public String frmAccesoriesReporte(Model model){
        model.addAttribute("lstAccesorios", accesoriesService.listarAccesorios());
        return "accesories/frmAccesoriesReporte";
    }



    @PostMapping("/registrarAccesories")
    @ResponseBody
    public ResultadoResponse registrarAccesories(@RequestBody AccesoriesRequest accesoriesRequest) {
        String mensaje = "Accesorio registrado correctamente";
        Boolean respuesta = true;
        try {
            Accesories objAccesories = new Accesories();
            if (accesoriesRequest.getId_accessories()> 0) {
                objAccesories.setId_accessories(accesoriesRequest.getId_accessories());
            }
            objAccesories.setId_accessories(accesoriesRequest.getId_accessories());
            objAccesories.setName(accesoriesRequest.getName());
            objAccesories.setDescription(accesoriesRequest.getDescription());
            Product objProduct = new Product();
            objProduct.setId_product(accesoriesRequest.getId_product());
            Companies objCompanies = new Companies();
            objCompanies.setId_company(accesoriesRequest.getId_company());
            ProductCategory objProductCategory = new ProductCategory();
            objProductCategory.setId(accesoriesRequest.getId());

            objAccesories.setProduct(objProduct);
            objAccesories.setCompanies(objCompanies);
            objAccesories.setCategory(objProductCategory);

            accesoriesService.registrarAccesorios(objAccesories);

        } catch (Exception e) {
            mensaje = "No se pudo registrar el accesorio";
            respuesta = false;
        }
        return ResultadoResponse.builder().mensaje(mensaje).respuesta(respuesta).build();
    }

    @DeleteMapping("/eliminarAccesories")
    @ResponseBody
    public ResultadoResponse eliminarAccesories(@RequestBody AccesoriesRequest accesoriesRequest) {
        String mensaje = "Accesorio eliminado correctamente";
        Boolean respuesta = true;
        try {
            accesoriesService.eliminarAccesorios(accesoriesRequest.getId_accessories());
        } catch (Exception e) {
            mensaje = "Accesorio no eliminado";
            respuesta = false;
        }
        return ResultadoResponse.builder().mensaje(mensaje).respuesta(respuesta).build();
    }
}
