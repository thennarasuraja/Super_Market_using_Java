package com.example.Super_Market_Backend.Controler;

import com.example.Super_Market_Backend.Model.Product;
import com.example.Super_Market_Backend.Repositary.ProductRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductControler {

    @Autowired
    private ProductRepositary productRepositary;


    @GetMapping()
    public List<Product> getAllProducts(){
        System.out.println("fdggffhgrtgr");
        return productRepositary.findAll();

    }

    @PostMapping("/creatproduct")
    public Product CreatProduct(@RequestBody Product product){
        Product saveddata=productRepositary.save(product);
        System.out.println(saveddata);
        return saveddata;

    }
    @PutMapping("/updateproduct/{id}")
    public Product Updateproduct(@PathVariable Long id,@RequestBody Product product){
         Product pro=productRepositary.findById(id).get();
         System.out.println("brforeupdate: "+pro);
         pro.setProductname(product.getProductname());
         pro.setQuantity(product.getQuantity());
         pro.setPrice(product.getPrice());
         productRepositary.save(pro);
        System.out.println("AfterUpdate :"+pro);
         return pro;
    }

    @DeleteMapping("/deleteproduct/{id}")

    public void Deleteproduct(@PathVariable Long id){
        productRepositary.deleteById(id);
    }








}
