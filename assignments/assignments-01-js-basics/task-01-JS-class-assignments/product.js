class product{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
    getTotalValue(){
        console.log("Total value: ",this.price*this.quantity);
    }
    updateQuantity(newQuantity){
        this.quantity=this.quantity+newQuantity;
        console.log("Total updated Quantity: ",this.quantity);
        
    }
}

const soap=new product("Cinthol",50,100);
const milk=new product("milk",30,100);

soap.getTotalValue();
soap.updateQuantity(100);
soap.getTotalValue();

milk.getTotalValue();
milk.updateQuantity(50);