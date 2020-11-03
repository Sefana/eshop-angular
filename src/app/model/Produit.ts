export class Produit {
    id: Number;
    name: String;
    price:Number;
    photo: String;
    type: boolean;
    constructor(id:Number,name:String,price:Number,photo:String,type:boolean) {
       this.id = id;
       this.name = name;
       this.photo = photo;
       this.price = price;
       this.type = type;
    }
}