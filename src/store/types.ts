export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

// function sum (x:number, y:number){
//     return x+y;
// }

// console.log(sum(5,5));

// function objSum({x,y}:{x:number, y:number}){
//     return x+y;
// }
// console.log(objSum({x:5, y:12}))



// let obj = '{"x":"hi","y":"bye"}';
// let parsing:{x:string, y:string} = JSON.parse(obj);
// parsing.y = "saasd"
// console.log(parsing);

// extends

// interface Product {
//     name:string,
//     price:number
// }
// interface AddTico extends Product {
//     color:string
// }
// const carObj:AddTico = {
//     name: 'Tico',
//     price: 1000,
//     color:'white',
// }
// console.log(carObj);

// enum Product {
//   up,
//   down,
//   right,
//   left

// }
// console.log(Product);

// void
// function deep(message: string): void {
//   alert(message);
// }
// deep("hi baby");

// interface Machine {
//   name: string,
//   color: string,
//   wheels?: number,
//   maxspeed(): number
// }

// let car = {
//   name: "Tesla",
//   color: "white",
//   wheels: 4,
//   maxspeed(): number {
//     return 50 * this.wheels
//   }
// }

// function myCar(machine: Machine): void {
//   console.log(
//     `my car ${machine.name}
//     color ${machine.color}
//     max speed ${machine.maxspeed()}
//     `
//   )
// }
// console.log(myCar(car));