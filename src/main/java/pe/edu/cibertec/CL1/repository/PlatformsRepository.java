package pe.edu.cibertec.CL1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.CL1.model.Platforms;

@Repository
public interface PlatformsRepository extends JpaRepository<Platforms, Long> {
}
