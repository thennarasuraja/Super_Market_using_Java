package com.example.Super_Market_Backend.Repositary;

import com.example.Super_Market_Backend.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepositary extends JpaRepository <Product,Long>{

}
