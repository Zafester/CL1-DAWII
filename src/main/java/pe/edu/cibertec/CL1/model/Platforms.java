package pe.edu.cibertec.CL1.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name="platforms")
@Getter
@Setter
public class Platforms {

	@Id
	@Column(name = "id_platforms")
	private Long id_platforms;
	
	@Column(name="plataform_name")
	private String plataform_name;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "platforms")
	private Set<Games> games;
}
