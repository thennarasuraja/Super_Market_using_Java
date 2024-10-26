export class Productinfo {
    id?:number
    productname!:string
    quantity!:number
    section!:string
    price!:number
    total?:number
    selectedProduct?:{ productname: string; section: string; price: number };
}
