package pe.edu.cibertec.CL1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.CL1.model.Games;
import pe.edu.cibertec.CL1.repository.GamesRepository;

import java.util.List;

@Service
public class GamesService {
    @Autowired
    private GamesRepository gamesRepository;

    public List<Games> listarJuegos(){
        return gamesRepository.findAll();
    }

    public void registrarJuegos(Games games) {
        gamesRepository.save(games);
    }

    public void eliminarJuegos(Long id_game) {
        gamesRepository.deleteById(id_game);
    }
}
