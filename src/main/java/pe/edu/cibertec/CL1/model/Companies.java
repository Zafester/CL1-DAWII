package pe.edu.cibertec.CL1.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name="companies")
@Getter
@Setter
public class Companies {

    @Id
    @Column(name = "id_company")
    private Long id_company;

    @Column(name="name")
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "companies")
    private Set<Accesories> accesories;

}
