package pe.edu.cibertec.CL1.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="accesories")
@Data
public class Accesories {

    @Id
    @Column(name = "id_accessories")
    private Long id_accessories;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "id",nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "id_company",nullable = false)
    private Companies companies;

    @ManyToOne
    @JoinColumn(name = "category_id",nullable = false)
    private ProductCategory category;
}
