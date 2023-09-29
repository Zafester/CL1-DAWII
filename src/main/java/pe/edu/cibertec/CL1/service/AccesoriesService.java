package pe.edu.cibertec.CL1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.CL1.model.Accesories;
import pe.edu.cibertec.CL1.repository.AccesoriesRepository;

import java.util.List;

@Service
public class AccesoriesService {

    @Autowired
    private AccesoriesRepository accesoriesRepository;

    public List<Accesories> listarAccesorios(){
        return accesoriesRepository.findAll();
    }

    public void registrarAccesorios(Accesories accesorios) {
        accesoriesRepository.save(accesorios);
    }

    public void eliminarAccesorios(Long id_accessories) {
        accesoriesRepository.deleteById(id_accessories);
    }

}
