
let num = 6;
let x = 10;
const sum = (num:number, x:number) =>{
    return num + x;
} 
console.log(sum(4,7));


const num1 = (y:number) => {
    return y 
};
console.log(num1(5));


let summary = (z:string, a?:boolean) => {
    if (a === true){
        return z.toUpperCase();
    } else {
        return z.toLowerCase();
    }
};

console.log(summary('thando', false));
console.log(summary('mlab', true));