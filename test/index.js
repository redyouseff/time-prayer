// class Rectangle {
//     constructor(width,hight){
//         this.width=width||1;
//         this.hight=hight||1;
//     }
//     printRectangle=()=>{
//         return console.log(`Rectangle: Width=${this.width}, Height=${this.hight}`)
//     }
//     calculateArea=()=>{
//         return this.width*this.hight
//     }
//     calculatePerimeter=()=>{
//         return (this.width+this.hight)*2
//     }
// }
// const r=new Rectangle();
// r.printRectangle()
// console.log(r.calculateArea())
// console.log(r.calculatePerimeter())


// class Circle{
//     constructor(r){
//         this.radius=r||1;
//     }
//     printCircle=()=>{
//         return console.log(`Circle: Radius=${this.r}`)
//     }
//     calculateCircumference=()=>{
//         return 2*3.14*this.radius
//     }
//     calculateArea=()=>{
//         return 3.14*this.radius*this.radius
//     }
// }
// const c=new Circle
// c.printCircle()
// console.log(c.calculateArea())
// console.log(c.calculateCircumference())

















class person{
    constructor(name,salary,job){
        this.name=name;
        this.salary=salary;
        this.job=job;
        this.info=()=>{
            return console.log(`his name is ${this.name} his jod is ${this.job}` )
        }
    }
    showInfo=()=>{
        return    console.log(`his name is ${this.name} his jod is ${this.job}` )
    }
}
class student extends person(){
    constructor(name,salary,job,age,dep){
        super(name,salary,job)
        this.n=this.name
        this.age=age;
        this.dep=dep;

    }
    show=()=>{
        return console.log(`name is${this.name} age = ${this.age} deb =${this.dep}`)
    }
}

const s=new student("name",200,"eng",12,dep)
s.show()








