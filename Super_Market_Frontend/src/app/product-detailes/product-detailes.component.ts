import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { Productinfo } from '../productinfo';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent implements OnInit{
  product!:Productinfo
  Addproduct=false

  productid:number|null=null
  AllProducts:Productinfo[] =[]
  editingIndex: number | null = null;
  constructor(private router:Router,private productservice:ProductserviceService){

  }
  ngOnInit(): void {
    this.getallproducts()
  }
  
  getallproducts(){
    this.productservice.getAllProuducts().subscribe((product:Productinfo[])=>{
      console.log("getAllProducts: ",product)
      this.AllProducts=product
      this.productsharing()
    })
  }
 
  Addproductfunc(){
    this.Addproduct=true
    this.product=new Productinfo()
    this.editingIndex=null
    console.log(this.editingIndex)
    console.log(this.product)
  }
  updateproduct(index:number,productid:number){
    this.productid=productid
    console.log("product_id:  ",productid)
    this.Addproduct=true
    this.product={...this.AllProducts[index]}
    this.editingIndex=index
    console.log( this.editingIndex)
  }
  Deleteproduct(id:number){
    console.log("productid:",id)
    this.productservice.Deleteproduct(id).subscribe(()=>{
      this.getallproducts();
    })

  }

  navigato(){
    this.router.navigate(['/buyproduct'])

  }
  SubmitProductDet(productform:NgForm){
    if(this.editingIndex==null){
      this.productservice.Creatproduct(productform.value).subscribe((data)=>{
        this.AllProducts.push(data)
        console.log(this.AllProducts)
      })
      
    }
    else if(this.editingIndex!==null){
      const index:number=this.editingIndex
      console.log("updateproduct: ",productform.value)
      console.log("editindex:",this.editingIndex)
      if(this.productid!==null){

        this.productservice.updateproduct(this.productid,productform.value).subscribe((product)=>{
          this.AllProducts[index]={...product}
          console.log(this.AllProducts)
          this.editingIndex=null
        })
      }  
    }
    console.log(productform)
    // productform.reset()
    this.Addproduct=false
    this.productsharing()
  }

  productsharing(){
    this.productservice.addproducts(this.AllProducts)

  }
  


}

