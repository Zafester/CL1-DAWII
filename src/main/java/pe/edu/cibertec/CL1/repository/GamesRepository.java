package pe.edu.cibertec.CL1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.CL1.model.Games;

@Repository
public interface GamesRepository extends JpaRepository<Games, Long> {
}
