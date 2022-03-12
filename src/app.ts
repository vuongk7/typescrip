export{};
const myname : string = "lê quý vương";
const myAge : number = 2;
const status : boolean = true;
const myObj : object = {};
const numberArr : number[] = [1,2,3,4];
const object : object = {};
const arrObject : object[] = [{id: 1}, {id: 2}, {id: 3}];
type User = {
    id: number;
    name : String
}
const numberArr1 : number[] = [1,2,3,4];
const stringArr :string[] = ["a","b","c"];


type Product = {
    id: number,
    name: string
}
const getProducts = <T extends Product>(products: T[]) =>{
    const result = products.map(item => `<div>${item.name}</div>`)
}
getProducts([{id: 1, name: "A"}, {id:2, name: "B"}]);