class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){
        console.log("Area :",this.width*this.height);

    }
    getPerimeter(){
        console.log("perimeter: ",2*(this.height+this.width));
    }
}

const rectangle1=new Rectangle(5,3);
const rectangle2=new Rectangle(4,3);
const rectangle3=new Rectangle(5,5);

rectangle1.getArea();
rectangle1.getPerimeter();
rectangle2.getArea();
rectangle2.getPerimeter();
rectangle3.getArea();
rectangle3.getPerimeter();