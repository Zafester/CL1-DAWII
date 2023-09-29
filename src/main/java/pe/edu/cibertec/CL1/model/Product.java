package pe.edu.cibertec.CL1.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="product")
@Getter
@Setter
public class Product {

    @Id
    @Column(name = "id")
    private Long id_product;

    @ManyToOne
    @JoinColumn(name = "category_id",nullable = false)
    private ProductCategory category;

    @Column(name="name")
    private String name;

    @Column(name="sku")
    private String sku;

    @Column(name="description")
    private String description;

    @Column(name="unit_price")
    private BigDecimal unit_price;

    @Column(name="image_url")
    private String image_url;

    @Column(name="units_in_stock")
    private Integer units_in_stock;

    @Column(name="date_created")
    @CreationTimestamp
    private Date date_created;

    @Column(name="last_updated")
    @UpdateTimestamp
    private Date last_updated;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    private Set<Accesories> accesories;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    private Set<Consoles> consoles;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    private Set<Games> games;


}
