import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productinfo } from '../productinfo';
import { CommonModule } from '@angular/common';
import { ProductserviceService } from '../service/productservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buy-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './buy-product.component.html',
  styleUrl: './buy-product.component.css'
})
export class BuyProductComponent implements OnInit{
  constructor(private router:Router,private productservice:ProductserviceService){}
  AddRows:Productinfo[]=[]
  // AddRows:Productinfo[]=[]
  add:boolean=false
  buyproducts:Productinfo[]=[]
  product:Productinfo={

    productname:'',
    quantity:0,
    section:'',
    price:0,
    total:0,
  }
  buytotal:number=0
  allproducts:Productinfo[]=[]
  showTotal:boolean=false

  ngOnInit(): void {
    this.getproductdata()
    
  }

  getproductdata(){
    this.allproducts=this.productservice.getproducts()
    console.log(this.allproducts)
  }
  Addrows(){
    this.add=true
    console.log(this.add)
    this.AddRows.push({...this.product})
    console.log("addrow",this.AddRows)

  }
  BuyProductsData(product:Productinfo,index:number){
    product.total = this.AddRows[index].selectedProduct ? (this.AddRows[index].quantity * this.AddRows[index].selectedProduct!.price) : 0;
    this.buyproducts.push(this.AddRows[index])
    this.AddRows.splice(index,1)
    console.log('Buyproducts:',this.buyproducts)
    if(this.AddRows.length<0){

      this.AddRows=[]
    }
    

  }
  CancelData(index:number){

    if(confirm("Are tou sure delete this table?")){
      this.AddRows.splice(index,1)
    }
  }
  Totalgenrate(){
    console.log("Addrows-length: ",this.AddRows.length)
    if(this.AddRows.length<=0){
      this.buytotal = this.buyproducts.reduce((acc, current) => {
        const currentTotal = current.total ?? 0; // Use nullish coalescing to handle undefined
        return acc + currentTotal; // Accumulate the total
      },0 );
      console.log("totalbuy:",this.buyproducts)
      console.log("totalbuy:",this.buytotal)
      this.showTotal=true
  
    }
    else{
      alert("please Add column")
    }
  
    
  }
  navigato(){
    this.router.navigate(['/'])

  }

}
