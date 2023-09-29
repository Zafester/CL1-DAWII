package pe.edu.cibertec.CL1.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="games")
@Data
public class Games {
    @Id
    @Column(name="id_game")
    private Long id_game;

    @Column(name="name")
    private String name;

    @Column(name="description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_console",nullable = false)
    private Consoles consoles;

    @ManyToOne
    @JoinColumn(name = "id_category",nullable = false)
    private Categories categories;

    @ManyToOne
    @JoinColumn(name = "id_platforms",nullable = false)
    private Platforms platforms;

    @ManyToOne
    @JoinColumn(name = "id_product",nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "category_id",nullable = false)
    private ProductCategory category;
}
