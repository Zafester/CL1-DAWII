package pe.edu.cibertec.CL1.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="consoles")
@Getter
@Setter
public class Consoles {


    @Id
    @Column(name = "id_console")
    private Long id_console;

    @Column(name="name_console")
    private String name_console;

    @Column(name="description")
    private String description;

    @Column(name="model")
    private String model;

    @Column(name="year")
    private String year;

    @ManyToOne            //cambiar id
    @JoinColumn(name = "id_product",nullable = false)
    private Product product;

    @ManyToOne			//cambiar id
    @JoinColumn(name = "id_category_product",nullable = false)
    private ProductCategory category;


}
