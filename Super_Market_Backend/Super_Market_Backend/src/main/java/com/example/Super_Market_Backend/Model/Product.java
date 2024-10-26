package com.example.Super_Market_Backend.Model;

import jakarta.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    @Column(name = "product_name")
    private String productname;


    @Column(name = "product_quantity")
    private Double quantity;

    @Column(name = "product_section")
    private String section;

    @Column(name = "product_price")
    private int  price;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductname() {
        return productname;
    }

    public void setProductname(String productname) {
        this.productname = productname;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }


    public String toString(){
        return this.id+" "+this.productname+" "+this.quantity+" "+this.price;
    }
}
