import { Injectable } from '@angular/core';
import { Productinfo } from '../productinfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  allproducts:Productinfo[]=[]

  getproducturl="http://localhost:8080/product"
  createproducturl="http://localhost:8080/product/creatproduct"
  
  updateproducturl="http://localhost:8080/product/updateproduct"

  deleteproducturl="http://localhost:8080/product/deleteproduct"


  getAllProuducts():Observable<Productinfo[]>{
    return this.http.get<Productinfo[]>(this.getproducturl);
  
  }

  Creatproduct(product:Productinfo):Observable<Productinfo>{
    return this.http.post<Productinfo>(this.createproducturl,product);

  }

  updateproduct(id:number,updateproduct:Productinfo):Observable<Productinfo>{

    return this.http.put<Productinfo>(this.updateproducturl+"/"+id,updateproduct);
  }
  Deleteproduct(id:number){
    return this.http.delete(this.deleteproducturl+"/"+id);

  }

  addproducts(products:Productinfo[]){
    this.allproducts=products;
  }
  getproducts(){
    return this.allproducts;
  }
  
}
