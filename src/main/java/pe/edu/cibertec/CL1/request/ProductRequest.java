package pe.edu.cibertec.CL1.request;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class ProductRequest {
    private Long id_product;
    private String name;
    private String sku;
    private String description;
    private BigDecimal unit_price;
    private String image_url;
    private Integer units_in_stock;
    private Date date_created;
    private Date last_updated;
    private Long id;
}
