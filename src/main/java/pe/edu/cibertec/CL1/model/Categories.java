package pe.edu.cibertec.CL1.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name="categories")
@Getter
@Setter
public class Categories {

    @Id
    @Column(name = "id_category")
    private Long id_category;

    @Column(name="name_category")
    private String name_category;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "categories")
    private Set<Games> games;

}
